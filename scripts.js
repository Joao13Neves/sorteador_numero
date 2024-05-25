// função para sortear os números
function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumerosAleatorios(de, ate);
    while (sorteados.includes(numero)) {
      numero = obterNumerosAleatorios(de, ate);
    }
    sorteados.push(numero);
  }

  let resultado = document.getElementById("numeros");
  resultado.innerHTML = `<label class="resultado_numero" id="numeros">${sorteados}</label>`;
  alterarStatusBotao();
}

// gerando números aleatórios
function obterNumerosAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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