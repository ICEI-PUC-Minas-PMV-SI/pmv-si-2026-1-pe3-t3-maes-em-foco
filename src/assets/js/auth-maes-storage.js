/**
 * Persistência e autenticação de mães (localStorage, frontend).
 */
(function () {
  const STORAGE_KEY = 'maes_em_foco_usuarios';
  const SESSION_KEY = 'maes_em_foco_sessao';

  function lerUsuarios() {
    try {
      const dados = localStorage.getItem(STORAGE_KEY);
      if (!dados) return [];
      const parsed = JSON.parse(dados);
      return Array.isArray(parsed.usuarios) ? parsed.usuarios : [];
    } catch {
      return [];
    }
  }

  function salvarLista(usuarios) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ usuarios }));
  }

  function normalizarEmail(email) {
    return String(email).trim().toLowerCase();
  }

  function gerarId() {
    return `mae_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  }

  window.AuthMaesStorage = {
    STORAGE_KEY,
    SESSION_KEY,

    listar() {
      return lerUsuarios();
    },

    buscarPorEmail(email) {
      const alvo = normalizarEmail(email);
      return lerUsuarios().find((u) => u.email === alvo) || null;
    },

    emailJaCadastrado(email) {
      return Boolean(this.buscarPorEmail(email));
    },

    cadastrar({ nome, email, senha, cidade }) {
      const emailNormalizado = normalizarEmail(email);

      if (this.emailJaCadastrado(emailNormalizado)) {
        return { sucesso: false, erro: 'Este e-mail já está cadastrado.' };
      }

      const usuario = {
        id: gerarId(),
        nome: String(nome).trim(),
        email: emailNormalizado,
        senha: String(senha),
        cidade: String(cidade).trim(),
        criadoEm: new Date().toISOString()
      };

      const usuarios = lerUsuarios();
      usuarios.push(usuario);
      salvarLista(usuarios);

      return { sucesso: true, usuario };
    },

    validarCredenciais(email, senha) {
      const usuario = this.buscarPorEmail(email);
      if (!usuario) return null;
      if (usuario.senha !== String(senha)) return null;
      return usuario;
    },

    autenticar(email, senha) {
      const usuario = this.validarCredenciais(email, senha);
      if (!usuario) {
        return { sucesso: false, erro: 'E-mail ou senha inválidos.' };
      }
      return { sucesso: true, usuario };
    },

    iniciarSessao(usuario) {
      const sessao = {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        cidade: usuario.cidade,
        logadoEm: new Date().toISOString()
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessao));
      return sessao;
    },

    obterSessao() {
      try {
        const dados = localStorage.getItem(SESSION_KEY);
        return dados ? JSON.parse(dados) : null;
      } catch {
        return null;
      }
    },

    encerrarSessao() {
      localStorage.removeItem(SESSION_KEY);
    }
  };
})();
