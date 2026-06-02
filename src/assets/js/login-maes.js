const form = document.getElementById('form-login');
const btnOlho = document.getElementById('btn-olho');
const inputSenha = document.getElementById('senha');
const senhaWrapper = document.querySelector('.senha-wrapper');

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

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = inputSenha.value;

  let valido = true;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    valido = marcarErro('email', 'aviso-email', 'Insira um e-mail válido.');
  } else {
    limparErro('email', 'aviso-email');
  }

  if (senha.length < 1) {
    valido = marcarErro('senha', 'aviso-senha', 'Por favor, insira sua senha.');
  } else {
    limparErro('senha', 'aviso-senha');
  }

  if (!valido) return;

  CadastroSucesso.exibir();
});

CadastroSucesso.configurar({
  form,
  aoFechar() {
    inputSenha.type = 'password';
    senhaWrapper.classList.remove('visivel');
    btnOlho.setAttribute('aria-label', 'Mostrar senha');
    document.querySelectorAll('.input-erro').forEach((el) => el.classList.remove('input-erro'));
    ['aviso-email', 'aviso-senha'].forEach((id) => {
      document.getElementById(id).textContent = '';
    });
  }
});
