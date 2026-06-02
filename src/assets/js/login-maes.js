const form = document.getElementById('form-login');
const btnOlho = document.getElementById('btn-olho');
const inputSenha = document.getElementById('senha');
const senhaWrapper = document.querySelector('.senha-wrapper');

const ROTA_APOS_LOGIN = '../../userprofile.html';

function alternarVisibilidadeSenha() {
  if (inputSenha.type === 'password') {
    inputSenha.type = 'text';
    senhaWrapper.classList.add('visivel');
    btnOlho.setAttribute('aria-label', 'Ocultar senha');
  } else {
    inputSenha.type = 'password';
    senhaWrapper.classList.remove('visivel');
    btnOlho.setAttribute('aria-label', 'Mostrar senha');
  }
}

btnOlho.addEventListener('click', alternarVisibilidadeSenha);
btnOlho.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    alternarVisibilidadeSenha();
  }
});

function marcarErro(inputId, avisoId, msg) {
  document.getElementById(avisoId).textContent = msg;
  document.getElementById(inputId).closest('.input-box').classList.add('input-erro');
  return false;
}

function limparErro(inputId, avisoId) {
  document.getElementById(avisoId).textContent = '';
  document.getElementById(inputId).closest('.input-box').classList.remove('input-erro');
}

function marcarErroLogin(msg) {
  document.getElementById('aviso-senha').textContent = msg;
  document.getElementById('email').closest('.input-box').classList.add('input-erro');
  inputSenha.closest('.input-box').classList.add('input-erro');
}

function limparErrosLogin() {
  limparErro('email', 'aviso-email');
  limparErro('senha', 'aviso-senha');
}

function resetarFormularioLogin() {
  inputSenha.type = 'password';
  senhaWrapper.classList.remove('visivel');
  btnOlho.setAttribute('aria-label', 'Mostrar senha');
  limparErrosLogin();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  limparErrosLogin();

  const email = document.getElementById('email').value.trim();
  const senha = inputSenha.value;

  let valido = true;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    valido = marcarErro('email', 'aviso-email', 'Insira um e-mail válido.');
  }

  if (senha.length < 1) {
    valido = marcarErro('senha', 'aviso-senha', 'Por favor, insira sua senha.');
  }

  if (!valido) return;

  const resultado = AuthMaesStorage.autenticar(email, senha);

  if (!resultado.sucesso) {
    marcarErroLogin(resultado.erro);
    return;
  }

  AuthMaesStorage.iniciarSessao(resultado.usuario);
  CadastroSucesso.exibir();
});

CadastroSucesso.configurar({
  form,
  loginUrl: ROTA_APOS_LOGIN,
  redirecionar: true,
  redirecionarAutomatico: true,
  redirectDelay: 1500,
  aoFechar: resetarFormularioLogin
});
