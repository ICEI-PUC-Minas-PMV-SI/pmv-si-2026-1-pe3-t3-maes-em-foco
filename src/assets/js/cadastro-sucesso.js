/**
 * Comportamento compartilhado da tela de sucesso nos formulários de cadastro.
 */
(function () {
  window.CadastroSucesso = {
    exibir() {
      const tela = document.getElementById('tela-sucesso');
      if (tela) tela.style.display = 'flex';
    },

    configurar({ form, loginUrl, redirecionar = false, aoFechar }) {
      const btnFechar = document.getElementById('btn-fechar-sucesso');
      const tela = document.getElementById('tela-sucesso');

      if (!btnFechar || !tela) return;

      btnFechar.addEventListener('click', () => {
        tela.style.display = 'none';

        if (form) form.reset();
        if (aoFechar) aoFechar();

        if (redirecionar && loginUrl) {
          window.location.href = loginUrl;
        }
      });
    }
  };
})();
