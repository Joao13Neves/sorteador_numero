// função para sortear os números
function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  if(isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
    alert("Por favor, o preenchimento dos campos são obritórios.");
    return;
  }

  // if(isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
  //   document.getElementById("mensagem-erro").onclick = function(){
  //     swal('O campos são obritórios!', 'error')
  //   };
  // }

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumerosAleatorios(de, ate);
    while (sorteados.includes(numero)) {
      numero = obterNumerosAleatorios(de, ate);
    }
    sorteados.push(numero);
  }

  sorteados.sort((a, b) => a - b);

  let resultado = document.getElementById("numeros");
  resultado.innerHTML = `<label>${sorteados.join(", ")}</label`;

  document.getElementById("resultado").classList.remove("oculto");

  alterarStatusBotao();
}

// gerando números aleatórios
function obterNumerosAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// função para alterar o botão
function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");

  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

// função para reiniciar
function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";

  let removendoDiv = document.getElementById("resultado");
  removendoDiv.remove();

  window.location.reload();

  alterarStatusBotao();
}