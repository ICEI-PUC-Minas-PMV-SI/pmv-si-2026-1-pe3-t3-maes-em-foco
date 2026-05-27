const form = document.getElementById('form-login');
const senhaInput = document.getElementById('senha-nova'); 
const confirmeInput = document.getElementById('confirme');
const telaSucesso = document.getElementById('tela-sucesso');
const btnFecharSucesso = document.getElementById('btn-fechar-sucesso');

const btnOlhoNova = document.getElementById('btn-olho-nova');
const btnOlhoConfirme = document.getElementById('btn-olho-confirme');

btnOlhoNova.addEventListener('click', () => {
  const wrapper = btnOlhoNova.closest('.senha-wrapper');
  if (senhaInput.type === 'password') {
    senhaInput.type = 'text';
    wrapper.classList.add('visivel');
  } else {
    senhaInput.type = 'password';
    wrapper.classList.remove('visivel');
  }
});

btnOlhoConfirme.addEventListener('click', () => {
  const wrapper = btnOlhoConfirme.closest('.senha-wrapper');
  if (confirmeInput.type === 'password') {
    confirmeInput.type = 'text';
    wrapper.classList.add('visivel');
  } else {
    confirmeInput.type = 'password';
    wrapper.classList.remove('visivel');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  
  const senha = senhaInput.value;

  if (senha.length < 8) {
    alert('A senha deve ter no mínimo 8 caracteres e uma letra maiúscula!');
  } else if (senha !== confirmeInput.value) {
    alert('As senhas não coincidem!');
  } else {
    telaSucesso.style.display = 'flex'; 
  }
});

btnFecharSucesso.addEventListener('click', () => {
  telaSucesso.style.display = 'none';
  form.reset();
  document.querySelectorAll('.senha-wrapper').forEach(wrapper => {
    wrapper.classList.remove('visivel');
  });
  senhaInput.type = 'password';
  confirmeInput.type = 'password';
  window.location.href = 'index.html'; 
});