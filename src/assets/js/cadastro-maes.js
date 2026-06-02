const form = document.getElementById('form-cadastro');
const btnOlho = document.getElementById('btn-olho');
const inputSenha = document.getElementById('senha');
const senhaWrapper = document.querySelector('.senha-wrapper');
const avisoSenha = document.getElementById('aviso-senha');

btnOlho.addEventListener('click', () => {
  if (inputSenha.type === 'password') {
    inputSenha.type = 'text';
    senhaWrapper.classList.add('visivel');
  } else {
    inputSenha.type = 'password';
    senhaWrapper.classList.remove('visivel');
  }
});

inputSenha.addEventListener('input', function () {
  const valor = this.value;

  if (!valor) {
    avisoSenha.textContent = 'Mínimo de 8 caracteres e uma letra maiúscula';
    avisoSenha.className = 'aviso-senha';
  } else if (valor.length < 8) {
    avisoSenha.textContent = 'Mínimo de 8 caracteres e uma letra maiúscula';
    avisoSenha.className = 'aviso-senha erro';
  } else if (!/[A-Z]/.test(valor)) {
    avisoSenha.textContent = 'Adicione pelo menos uma letra maiúscula';
    avisoSenha.className = 'aviso-senha erro';
  } else {
    avisoSenha.textContent = 'Senha válida ✓';
    avisoSenha.className = 'aviso-senha ok';
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

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = inputSenha.value;
  const cidade = document.getElementById('cidade').value.trim();
  const termos = document.getElementById('termos').checked;

  let valido = true;

  if (nome.length < 3) valido = marcarErro('nome', 'aviso-nome', 'Por favor, insira seu nome completo.');
  else limparErro('nome', 'aviso-nome');

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) valido = marcarErro('email', 'aviso-email', 'Insira um e-mail válido.');
  else limparErro('email', 'aviso-email');

  if (senha.length < 8 || !/[A-Z]/.test(senha)) {
    avisoSenha.textContent = 'Mínimo de 8 caracteres e uma letra maiúscula.';
    avisoSenha.className = 'aviso-senha erro';
    inputSenha.closest('.input-box').classList.add('input-erro');
    valido = false;
  } else {
    inputSenha.closest('.input-box').classList.remove('input-erro');
  }

  if (cidade.length < 2) valido = marcarErro('cidade', 'aviso-cidade', 'Por favor, informe sua cidade.');
  else limparErro('cidade', 'aviso-cidade');

  if (!termos) {
    alert('Você precisa aceitar os termos de privacidade e serviço.');
    valido = false;
  }

  if (!valido) return;

  CadastroSucesso.exibir();
});

CadastroSucesso.configurar({
  form,
  loginUrl: '../../index.html',
  aoFechar() {
    inputSenha.type = 'password';
    senhaWrapper.classList.remove('visivel');
    avisoSenha.textContent = 'Mínimo de 8 caracteres e uma letra maiúscula';
    avisoSenha.className = 'aviso-senha';
    document.querySelectorAll('.input-erro').forEach((el) => el.classList.remove('input-erro'));
    ['aviso-nome', 'aviso-email', 'aviso-cidade'].forEach((id) => {
      document.getElementById(id).textContent = '';
    });
    // Redirecionar para login quando a página estiver disponível:
    // window.location.href = '../../index.html';
  }
});
