const form = document.getElementById('form-login');
const campoEspecialidade = document.getElementById('especialidade');
const containerRegistro = document.getElementById('registroContainer');
const inputRegistro = document.getElementById('registro');
const nomeArquivo = document.getElementById('nomeArquivo');

const btnOlho = document.getElementById('btn-olho');
const inputSenha = document.getElementById('senha');
const senhaWrapper = document.querySelector('.senha-wrapper');

// MOSTRAR / OCULTAR SENHA
btnOlho.addEventListener('click', () => {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
        senhaWrapper.classList.add('visivel');
    } else {
        inputSenha.type = 'password';
        senhaWrapper.classList.remove('visivel');
    }
});

// CARREGAR DADOS SALVOS
window.addEventListener('load', () => {
    const dadosSalvos = JSON.parse(
        localStorage.getItem('cadastroProfissionalTemp')
    );

    if (dadosSalvos) {
        document.getElementById('nome').value = dadosSalvos.nome || '';
        document.getElementById('email').value = dadosSalvos.email || '';
        document.getElementById('cidade').value = dadosSalvos.cidade || '';
        document.getElementById('especialidade').value =
            dadosSalvos.especialidade || '';

        if (
            dadosSalvos.especialidade === 'Psicólogo' ||
            dadosSalvos.especialidade === 'Advogado'
        ) {
            containerRegistro.style.display = 'flex';
        }
    }
});

// SALVAR DADOS TEMPORÁRIOS
form.addEventListener('input', () => {
    const dadosParaSalvar = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        cidade: document.getElementById('cidade').value,
        especialidade: document.getElementById('especialidade').value
    };

    localStorage.setItem(
        'cadastroProfissionalTemp',
        JSON.stringify(dadosParaSalvar)
    );
});

// EXIBIR CAMPO DE REGISTRO
console.log(especialidade);
campoEspecialidade.addEventListener('change', () => {
    const valor = campoEspecialidade.value;

    if (valor === 'Psicólogo' || valor === 'Advogado') {
        containerRegistro.style.display = 'flex';
        inputRegistro.setAttribute('required', 'true');
    } else {
        containerRegistro.style.display = 'none';
        inputRegistro.removeAttribute('required');
        inputRegistro.value = '';

        nomeArquivo.textContent =
            'Selecione o documento comprovatório';
    }
});

// ENVIO DO FORMULÁRIO
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('CLIQUEI EM ENVIAR');

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const especialidade = campoEspecialidade.value.trim();
    const termos = document.getElementById('termos').checked;

    if (!nome || !email || !senha || !cidade || !especialidade) {
        alert('Preencha todos os campos.');
        return;
    }

    if (!email.includes('@')) {
        alert('E-mail inválido.');
        return;
    }

    const temMaiuscula = /[A-Z]/.test(senha);

if (senha.length < 8 || !temMaiuscula) {
    alert('A senha deve conter pelo menos 8 caracteres e uma letra maiúscula');
    return;
}

    if (
        (especialidade === 'Psicólogo' ||
            especialidade === 'Advogado') &&
        inputRegistro.files.length === 0
    ) {
        alert('Adicione o anexo do seu registro profissional.');
        return;
    }

    if (!termos) {
        alert('Você deve aceitar os termos de uso.');
        return;
    }

    // BUSCA EMAILS JÁ EM ANÁLISE
    let emailsCadastrados =
        JSON.parse(localStorage.getItem('emailsCadastrados')) || [];

    // EMAIL JÁ EXISTE
    if (emailsCadastrados.includes(email.toLowerCase())) {
        document.getElementById('tela-email-analise').style.display = 'flex';
        return;
    }

    // SALVA O EMAIL
    emailsCadastrados.push(email.toLowerCase());

    localStorage.setItem(
        'emailsCadastrados',
        JSON.stringify(emailsCadastrados)
    );

    localStorage.removeItem('cadastroProfissionalTemp');

    // MOSTRA CARD DE SUCESSO
    document.getElementById('tela-sucesso').style.display = 'flex';
});

// FECHAR CARD DE SUCESSO
const btnFechar = document.getElementById('btn-fechar-sucesso');

if (btnFechar) {
    btnFechar.addEventListener('click', () => {
        document.getElementById('tela-sucesso').style.display = 'none';
        window.location.href = '/index.html';
    });
}

// FECHAR CARD DE EMAIL EM ANÁLISE
const btnFecharAnalise =
    document.getElementById('btn-fechar-analise');

if (btnFecharAnalise) {
    btnFecharAnalise.addEventListener('click', () => {
        document.getElementById('tela-email-analise').style.display = 'none';
         window.location.href = '/index.html';
    });
}

// ABRIR SELETOR DE ARQUIVO
nomeArquivo.addEventListener('click', () => {
    inputRegistro.click();
});

// MOSTRAR NOME DO ARQUIVO
inputRegistro.addEventListener('change', () => {
    if (inputRegistro.files.length > 0) {
        nomeArquivo.textContent =
            inputRegistro.files[0].name;
    } else {
        nomeArquivo.textContent =
            'Selecione o documento comprovatório';
    }
});