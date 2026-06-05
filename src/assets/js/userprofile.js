const userEmail = "renata.oliveira@gmail.com";

// carrega dados do JSON e localStorage
function carregarDadosDoJson() {
    fetch("./assets/js/usermaes.json")
        .then(response => response.json())
        .then(data => {
            const user = data.maes.find(mae => mae.email === userEmail);
            const dadosSalvos = verificarLocalStorage(userEmail);
            const userData = dadosSalvos || user;

            if (userData) {
                preencherDados(userData);
            } else {
                console.error("Usuário não encontrado.");
            }
        })
        .catch(error => console.error("Erro ao carregar dados:", error));
}

// verifica localStorage
function verificarLocalStorage(email) {
    return JSON.parse(localStorage.getItem(email));
}

// preenche dados na tela
function preencherDados(user) {
    
    document.getElementById("name").innerText = user.name || "Nome de Usuário";
    document.getElementById("bio").innerText = user.bio || "Uma breve descrição sobre mim.";
    document.getElementById("location").innerText = user.location || "Localização não informada";
    document.getElementById("profilePreview").src = user.image || "./assets/img/no-photo.jpg";
    
    if (user.profileType) {
        // deixa a primeira letra maiúscula
        const categoria = user.profileType.charAt(0).toUpperCase() + user.profileType.slice(1);
        document.getElementById("profileType").innerText = categoria;
    }

    // número de filhos para não exibir apenas o número puro
    if (user.children !== undefined && user.children !== "") {
        const qtd = user.children;
        document.getElementById("children").innerText = `${qtd} ${qtd == 1 ? 'filho' : 'filhos'}`;
    } else {
        document.getElementById("children").innerText = "Filhos não informados";
    }
}

// excluir perfil

function excluirPerfil() {
  const confirmacao = confirm("Tem certeza que deseja excluir seu perfil?");
  if (confirmacao) {
    localStorage.removeItem(userEmail);

    alert("Perfil excluído com sucesso.");
    window.location.href = "landing-page.html";
  } else {
    alert("Exclusão cancelada.");
  }
}

carregarDadosDoJson();