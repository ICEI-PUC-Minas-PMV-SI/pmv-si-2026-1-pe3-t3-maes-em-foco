const form = document.getElementById('form-login');
const codigoInput = document.getElementById('codigo');
const telaSucesso = document.getElementById('tela-sucesso');
const btnFecharSucesso = document.getElementById('btn-fechar-sucesso');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (codigoInput.value.length === 4) {
        telaSucesso.style.display = 'flex';
    } else {
        alert('O código deve ter 4 dígitos.');
    }
});

btnFecharSucesso.addEventListener('click', () => {
    telaSucesso.style.display = 'none';
    window.location.href = 'nova-senha.html';
});