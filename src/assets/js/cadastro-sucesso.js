/**
 * Comportamento compartilhado da tela de sucesso nos formulários de cadastro.
 */
(function () {
  let redirectTimer = null;

  function redirecionar(loginUrl) {
    if (loginUrl) window.location.href = loginUrl;
  }

  window.CadastroSucesso = {
    exibir() {
      const tela = document.getElementById('tela-sucesso');
      if (tela) tela.style.display = 'flex';
    },

    configurar({
      form,
      loginUrl,
      redirecionar: deveRedirecionar = false,
      redirecionarAutomatico = false,
      redirectDelay = 2500,
      aoFechar
    }) {
      const btnFechar = document.getElementById('btn-fechar-sucesso');
      const tela = document.getElementById('tela-sucesso');

      if (!btnFechar || !tela) return;

      function finalizar(redirecionarAgora = false) {
        tela.style.display = 'none';

        if (redirectTimer) {
          clearTimeout(redirectTimer);
          redirectTimer = null;
        }

        if (form) form.reset();
        if (aoFechar) aoFechar();

        if (redirecionarAgora && loginUrl) {
          redirecionar(loginUrl);
        }
      }

      btnFechar.addEventListener('click', () => {
        finalizar(deveRedirecionar || Boolean(loginUrl));
      });

      const originalExibir = this.exibir.bind(this);
      this.exibir = function exibirComRedirect() {
        originalExibir();

        if (redirecionarAutomatico && loginUrl) {
          redirectTimer = setTimeout(() => finalizar(true), redirectDelay);
        }
      };
    }
  };
})();
