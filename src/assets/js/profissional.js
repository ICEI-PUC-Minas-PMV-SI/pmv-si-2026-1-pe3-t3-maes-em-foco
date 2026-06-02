const form = document.getElementById('form-login');
const campoEspecialidade = document.getElementById('especialidade');
const containerRegistro = document.getElementById('registroContainer');
const inputRegistro = document.getElementById('registro');
const btnOlho = document.getElementById('btn-olho');
const inputSenha = document.getElementById('senha');
const senhaWrapper = document.querySelector('.senha-wrapper');

btnOlho.addEventListener('click', () => {
  if (inputSenha.type === 'password') {
    inputSenha.type = 'text';
    senhaWrapper.classList.add('visivel');
  } else {
    inputSenha.type = 'password';
    senhaWrapper.classList.remove('visivel');
  }
});

window.addEventListener('load', () => {
    const dadosSalvos = JSON.parse(localStorage.getItem('cadastroProfissionalTemp'));
    if (dadosSalvos) {
        document.getElementById('nome').value = dadosSalvos.nome || '';
        document.getElementById('email').value = dadosSalvos.email || '';
        document.getElementById('cidade').value = dadosSalvos.cidade || '';
        document.getElementById('especialidade').value = dadosSalvos.especialidade || '';
        if (dadosSalvos.especialidade === 'Psicólogo' || dadosSalvos.especialidade === 'Advogado') {
            containerRegistro.style.display = 'flex';
            inputRegistro.value = dadosSalvos.registro || '';
        }
    }
});

form.addEventListener('input', () => {
    const dadosParaSalvar = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        cidade: document.getElementById('cidade').value,
        especialidade: document.getElementById('especialidade').value,
        registro: document.getElementById('registro').value
    };
    localStorage.setItem('cadastroProfissionalTemp', JSON.stringify(dadosParaSalvar));
});

campoEspecialidade.addEventListener('input', () => {
  const valor = campoEspecialidade.value;
  if (valor === 'Psicólogo' || valor === 'Advogado') {
    containerRegistro.style.display = 'flex';
    inputRegistro.setAttribute('required', 'true');
  } else {
    containerRegistro.style.display = 'none';
    inputRegistro.removeAttribute('required');
    inputRegistro.value = '';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = inputSenha.value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const especialidade = campoEspecialidade.value.trim();
  const registro = inputRegistro.value.trim();
  const termos = document.getElementById('termos').checked;

  if (!name || !email || !senha || !cidade || !especialidade) {
    alert('Preencha todos os campos!');
    return;
  }

  if ((especialidade === 'Psicólogo' || especialidade === 'Advogado') && !registro) {
    alert('Preencha o seu registro profissional!');
    return;
  }

  if (!email.includes('@')) {
    alert('E-mail inválido!');
    return;
  }

  if (senha.length < 8) {
    alert('A senha deve conter pelo menos 8 caracteres!');
    return;
  }

  if (!termos) {
    alert('Você deve aceitar os termos de privacidade.');
    return;
  }

  let emailsCadastrados = JSON.parse(localStorage.getItem('emailsCadastrados')) || [];
  if (emailsCadastrados.includes(email.toLowerCase())) {
    alert('Este e-mail já está cadastrado.');
    return;
  }

  emailsCadastrados.push(email.toLowerCase());
  localStorage.setItem('emailsCadastrados', JSON.stringify(emailsCadastrados));
  localStorage.removeItem('cadastroProfissionalTemp');
  
  CadastroSucesso.exibir();
});

CadastroSucesso.configurar({
  form,
  loginUrl: 'index.html',
  redirecionar: true,
  aoFechar() {
    inputSenha.type = 'password';
    senhaWrapper.classList.remove('visivel');
  }
});
