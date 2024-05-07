// função para sortear os números
function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  //Array para armazenar os números
  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade, i++;) {
    numero = obterNumerosAleatorios(de, ate);
    sorteados.push(numero);
  }
}

// gerando números aleatórios
function obterNumerosAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
