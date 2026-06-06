const overlay       = document.getElementById('modal-overlay');
const btnAbrir      = document.getElementById('btn-abrir-modal');
const btnFechar     = document.getElementById('btn-fechar-modal');
const btnCancelar   = document.getElementById('btn-cancelar-modal');
const btnSalvar     = document.getElementById('btn-salvar-post');
const inputTitulo   = document.getElementById('input-titulo');
const inputConteudo = document.getElementById('input-conteudo');
const inputImagem   = document.getElementById('input-imagem');
const feedContainer = document.getElementById('feed-container');

function abrirModal() {
    overlay.classList.add('aberto');
    inputTitulo.focus();
}

function fecharModal() {
    overlay.classList.remove('aberto');
    inputTitulo.value   = '';
    inputConteudo.value = '';
    inputImagem.value   = '';
}

btnAbrir.addEventListener('click', abrirModal);
btnFechar.addEventListener('click', fecharModal);
btnCancelar.addEventListener('click', fecharModal);
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) fecharModal();
});

let postCount = 10;

btnSalvar.addEventListener('click', () => {
    const titulo   = inputTitulo.value.trim();
    const conteudo = inputConteudo.value.trim();
    const imagem   = inputImagem.value.trim();

    if (!titulo && !conteudo) {
        inputTitulo.style.borderColor   = '#e74c3c';
        inputConteudo.style.borderColor = '#e74c3c';
        setTimeout(() => {
            inputTitulo.style.borderColor   = '';
            inputConteudo.style.borderColor = '';
        }, 1500);
        return;
    }

    postCount++;
    const id = 'post-' + postCount;

    const imgHtml = imagem
        ? `<div class="post-imagem">
               <img src="${imagem}" alt="Imagem do post"
                    onerror="this.parentElement.style.display='none'">
           </div>`
        : '';

    const novoPost = document.createElement('div');
    novoPost.className = 'post-card';
    novoPost.id = id;
    novoPost.style.animation = 'slideUp 0.4s cubic-bezier(0.22,1,0.36,1)';
    novoPost.innerHTML = `
        <div class="post-header">
            <div class="avatar">
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" stroke-width="1.5" stroke="#9387A9" fill="none"/>
                    <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke-width="1.5" stroke="#9387A9" fill="none"/>
                </svg>
            </div>
            <div>
                <div class="post-autor-nome">Você</div>
                <div class="post-autor-tipo">${titulo}</div>
            </div>
        </div>
        <div class="post-texto">${conteudo.replace(/\n/g, '<br>')}</div>
        ${imgHtml}
        <div class="post-acoes">
            <button class="acao-btn" onclick="curtir(this)">
                <svg viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke-width="1.8"/>
                </svg>
            </button>
            <button class="acao-btn" onclick="comentar('${id}')">
                <svg viewBox="0 0 24 24">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke-width="1.8"/>
                </svg>
            </button>
            <button class="acao-btn" onclick="denunciar(this)">
                <svg viewBox="0 0 24 24">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke-width="1.8"/>
                    <line x1="12" y1="9" x2="12" y2="13" stroke-width="1.8"/>
                    <line x1="12" y1="17" x2="12.01" y2="17" stroke-width="2.5"/>
                </svg>
            </button>
        </div>`;

    feedContainer.insertBefore(novoPost, feedContainer.firstChild);
    fecharModal();
    window.scrollTo({ top: 72, behavior: 'smooth' });
});

function curtir(btn) {
    btn.classList.toggle('curtido');
}

function comentar(postId) {
    const card = document.getElementById(postId);
    let caixa = card.querySelector('.caixa-comentario');

    if (caixa) {
        caixa.remove();
        return;
    }

    caixa = document.createElement('div');
    caixa.className = 'caixa-comentario';
    caixa.innerHTML = `
        <input type="text" placeholder="Escreva um comentário..."
               onkeydown="if(event.key==='Enter') enviarComentario(this, '${postId}')">
        <button onclick="enviarComentario(this.previousElementSibling, '${postId}')">
            Enviar
        </button>`;

    card.querySelector('.post-acoes').after(caixa);
    caixa.querySelector('input').focus();
}

function enviarComentario(input, postId) {
    const texto = input.value.trim();
    if (!texto) return;

    const card = document.getElementById(postId);
    let lista = card.querySelector('.lista-comentarios');

    if (!lista) {
        lista = document.createElement('div');
        lista.className = 'lista-comentarios';
        card.querySelector('.caixa-comentario').after(lista);
    }

    const item = document.createElement('div');
    item.className = 'item-comentario';
    item.innerHTML = `<strong>Você:</strong> ${texto}`;
    lista.appendChild(item);
    input.value = '';
}

function denunciar(btn) {
    if (confirm('Denunciar esta publicação?\nEla será removida do seu feed.')) {
        const card = btn.closest('.post-card');
        card.classList.add('post-saindo');
        setTimeout(() => card.remove(), 560);
    }
}
