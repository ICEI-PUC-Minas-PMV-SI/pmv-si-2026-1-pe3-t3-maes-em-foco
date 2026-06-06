(function () {
    const STORAGE_KEY = 'profissionais_maes_em_foco';

    function qs(sel) { return document.querySelector(sel); }

    function getQueryParam(name) {
        return new URLSearchParams(window.location.search).get(name);
    }

    async function loadProfessionals() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            try { return JSON.parse(raw); } catch (e) { console.error(e); }
        }
        try {
            const res = await fetch('assets/js/profissionais2.json');
            if (!res.ok) throw new Error('Falha ao carregar profissionais2.json');
            const data = await res.json();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            return data;
        } catch (e) {
            console.error('Erro ao carregar profissionais iniciais', e);
            return [];
        }
    }

    function saveProfessionals(list) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }

    function findById(list, id) {
        return list.find(p => String(p.id) === String(id)) || null;
    }

    function starsHtml(rating, size = '') {
        const n = Math.round(Number(rating) || 5);
        return `<span class="estrelas-row ${size}">${'★'.repeat(n)}${'☆'.repeat(5 - n)}</span>`;
    }

    function buildCard(prof) {
        const img = prof.foto || prof.imagem || 'assets/img/no-photo.jpg';
        const whatsapp = prof.whatsapp || prof.telefone || '';
        const rating = calcRating(prof);
        const totalAval = (prof.avaliacoes || []).length;

        const contactBtn = whatsapp
            ? `<a class="btn-whatsapp" href="https://wa.me/${encodeURIComponent(whatsapp)}" target="_blank">Entrar em contato pelo Whatsapp <i class="fa-brands fa-whatsapp"></i></a>`
            : (prof.email ? `<a class="btn-mail" href="mailto:${prof.email}">Entrar em contato por e-mail</a>` : '');

        const emailIcon = prof.email ? `<a href="mailto:${prof.email}" title="E-mail"><i class="fa-regular fa-envelope"></i></a>` : '';
        const linkIcon  = prof.site  ? `<a href="${prof.site}" target="_blank" title="Site"><i class="fa-solid fa-link"></i></a>` : '';
        const igIcon    = prof.instagram ? `<a href="${prof.instagram}" target="_blank" title="Instagram"><i class="fa-brands fa-instagram"></i></a>` : '';

        return `
      <div class="card-hero">
        <img src="${img}" alt="${prof.nome}" class="profile-photo" />
        <div class="profile-meta">
          <h2 class="profile-name">${prof.nome} <i class="fa-solid fa-circle-check verified"></i></h2>
          <div class="profile-rating">
            <span class="nota">${Number(rating).toFixed(1)}</span>
            <i class="fa-solid fa-star star-icon"></i>
            <span class="total-avaliacoes">(${totalAval} avaliações)</span>
          </div>
          <div class="profile-categoria">${prof.categoria || ''}</div>
          <div class="profile-icons">${emailIcon}${linkIcon}${igIcon}</div>
        </div>
      </div>
      <p class="profile-descricao">${prof.descricao || ''}</p>
      ${contactBtn}
    `;
    }

    function buildEndereco(prof) {
        if (!prof.endereco) return `<div class="endereco-box"><p style="color:#888;font-size:.9rem">Endereço não informado.</p></div>`;
        const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(prof.endereco)}`;
        const parts = prof.endereco.split(',');
        const line1 = parts[0] || '';
        const line2 = parts.slice(1).join(',').trim();
        return `
      <div class="endereco-box">
        <h3>Endereço:</h3>
        <div class="endereco-row">
          <p class="endereco-text">${line1}${line2 ? '<br>' + line2 : ''}</p>
          <a class="maps-link" href="${maps}" target="_blank">Ver no Google Maps <i class="fa-solid fa-location-dot"></i></a>
        </div>
      </div>
    `;
    }

    function buildGaleria(prof) {
        const imgs = (prof.imagens && prof.imagens.length) ? prof.imagens : (prof.fotos || prof.gallery || []);
        if (!imgs || imgs.length === 0) return '';
        const items = imgs.map(src => `<div class="gal-item"><img src="${src}" alt="Galeria"/></div>`).join('');
        return `
      <div class="galeria-box">
        <h3>Conheça meu espaço:</h3>
        <div class="galeria-wrapper">
          <button class="gal-prev" aria-label="Anterior"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="galeria-slider" id="galeria-slider">${items}</div>
          <button class="gal-next" aria-label="Próximo"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    `;
    }

    function calcRating(prof) {
        if (prof.rating !== undefined && prof.rating !== null) return prof.rating;
        const avals = prof.avaliacoes || [];
        return avals.length ? avals.reduce((s, a) => s + (a.nota || 5), 0) / avals.length : 5;
    }

    function buildAvaliacoes(prof) {
        const avals = prof.avaliacoes || [];
        const avg = calcRating(prof);

        const trustvox = `
      <div class="trustvox-badge">
        <div class="trustvox-placeholder">R4<br>trustvox</div>
      </div>`;

        const resumo = `
      <div class="avaliacoes-resumo">
        <div class="aval-score">
          <span class="aval-numero">${Number(avg).toFixed(1)}</span>
          ${starsHtml(avg)}
          <span class="aval-total">(${avals.length} avaliações)</span>
        </div>
        ${trustvox}
      </div>`;

        const filtros = `
      <div class="aval-filtros">
        <button class="filtro-btn">Relevantes</button>
        <button class="filtro-btn active"><i class="fa-solid fa-check"></i> Recentes</button>
        <button class="filtro-btn">Melhores Avaliações</button>
        <button class="filtro-btn">Piores Avaliações</button>
      </div>`;

        const list = avals.map(a => {
            const avatar = a.avatar
                ? `<img src="${a.avatar}" class="user-avatar" alt="${a.nome || 'Usuário'}"/>`
                : `<div class="user-avatar" style="background:#ddd;display:inline-block;"></div>`;
            const dataFmt = a.data ? new Date(a.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '';
            return `
        <div class="avaliacao-item">
          <div class="avaliacao-header">
            <div class="avaliacao-user">
              ${avatar}
              <div class="avaliacao-meta">
                <strong>${a.nome || 'Usuário'}</strong>
                <span class="data">${dataFmt}</span>
              </div>
            </div>
            <div class="estrelas-aval">${'★'.repeat(a.nota || 5)}</div>
          </div>
          <p class="avaliacao-text">${a.texto || ''}</p>
        </div>`;
        }).join('');

        return `
      <div class="avaliacoes-box">
        <h3>Avaliações</h3>
        ${resumo}
        ${filtros}
        <div class="avaliacoes-list">${list || '<p style="color:#888;font-size:.9rem">Nenhuma avaliação ainda.</p>'}</div>
        ${avals.length > 3 ? '<button class="btn-ver-mais">Ver Mais Avaliações +</button>' : ''}
      </div>`;
    }

    function showAdminControls(prof) {
        const sess = window.AuthMaesStorage ? window.AuthMaesStorage.obterSessao() : null;
        if (!sess) return false;
        if (prof.email && sess.email && prof.email.toLowerCase() === sess.email.toLowerCase()) return true;
        if (localStorage.getItem('isAdmin') === 'true') return true;
        return false;
    }

    async function render() {
        const id = getQueryParam('id');
        const professionals = await loadProfessionals();

        if (!id) {
            setupModal(null, professionals);
            document.getElementById('modal-edicao').style.display = 'flex';
            qs('#modal-titulo').textContent = 'Criar novo perfil';
            return;
        }

        const prof = findById(professionals, id);
        if (!prof) {
            qs('#card-principal').innerHTML = '<p>Profissional não encontrado.</p>';
            return;
        }

        if (!prof.imagens) prof.imagens = prof.foto ? [prof.foto] : [];

        qs('#card-principal').innerHTML = buildCard(prof);
        qs('#endereco-card').innerHTML   = buildEndereco(prof);
        qs('#galeria-card').innerHTML    = buildGaleria(prof);
        qs('#avaliacoes-card').innerHTML = buildAvaliacoes(prof);

        const slider = document.getElementById('galeria-slider');
        if (slider) {
            const prev = document.querySelector('.gal-prev');
            const next = document.querySelector('.gal-next');
            if (prev) prev.addEventListener('click', () => slider.scrollBy({ left: -240, behavior: 'smooth' }));
            if (next) next.addEventListener('click', () => slider.scrollBy({ left: 240, behavior: 'smooth' }));
        }

        document.querySelectorAll('.filtro-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        if (showAdminControls(prof)) {
            qs('#acoes-admin').style.display = 'flex';
            qs('#btn-editar').addEventListener('click', () => openEditModal(prof, professionals));
            qs('#btn-excluir').addEventListener('click', () => handleDelete(prof, professionals));
        }
    }

    function openEditModal(prof, professionals) {
        setupModal(prof, professionals);
        qs('#modal-edicao').style.display = 'flex';
        qs('#modal-titulo').textContent = 'Editar perfil';
    }

    function setupModal(prof, professionals) {
        const isNew = !prof;
        qs('#input-nome').value      = prof ? (prof.nome || '') : '';
        qs('#input-categoria').value = prof ? (prof.categoria || '') : '';
        qs('#input-email').value     = prof ? (prof.email || '') : '';
        qs('#input-whatsapp').value  = prof ? (prof.whatsapp || prof.telefone || '') : '';
        qs('#input-endereco').value  = prof ? (prof.endereco || '') : '';
        qs('#input-descricao').value = prof ? (prof.descricao || '') : '';
        qs('#input-imagens').value   = prof ? ((prof.imagens && prof.imagens.join(',')) || '') : '';

        const form = qs('#form-edicao');
        function onSubmit(e) {
            e.preventDefault();
            const imagens = qs('#input-imagens').value.trim().split(',').map(s => s.trim()).filter(Boolean);
            const updated = Object.assign({}, prof || {}, {
                nome:      qs('#input-nome').value.trim(),
                categoria: qs('#input-categoria').value.trim(),
                email:     qs('#input-email').value.trim(),
                whatsapp:  qs('#input-whatsapp').value.trim(),
                endereco:  qs('#input-endereco').value.trim(),
                descricao: qs('#input-descricao').value.trim(),
                imagens
            });
            const list = professionals || JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
            if (isNew) {
                updated.id = Date.now();
                updated.foto = imagens[0] || '';
                updated.rating = updated.rating || 5.0;
                updated.avaliacoes = updated.avaliacoes || [];
                list.push(updated);
            } else {
                const idx = list.findIndex(p => String(p.id) === String(updated.id));
                if (idx >= 0) list[idx] = Object.assign(list[idx], updated);
            }
            saveProfessionals(list);
            qs('#modal-edicao').style.display = 'none';
            form.removeEventListener('submit', onSubmit);
            window.location.href = `perfil.html?id=${updated.id}`;
        }

        form.removeEventListener('submit', onSubmit);
        form.addEventListener('submit', onSubmit);
        qs('#btn-cancelar').addEventListener('click', () => {
            qs('#modal-edicao').style.display = 'none';
            form.removeEventListener('submit', onSubmit);
        });
    }

    function handleDelete(prof, professionals) {
        if (!confirm(`Tem certeza que deseja excluir o perfil de ${prof.nome}?`)) return;
        saveProfessionals(professionals.filter(p => String(p.id) !== String(prof.id)));
        alert('Perfil excluído com sucesso.');
        window.location.href = 'servicos.html';
    }

    document.addEventListener('DOMContentLoaded', render);
})();