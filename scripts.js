function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let minimo = parseInt(document.getElementById("minimo").value);
  let maximo = parseInt(document.getElementById("maximo").value);

  let numero = obterNumerosAleatorios(minimo, maximo);
  alert(numero);
}

function obterNumerosAleatorios(min, max) {
  return Math.random() * (maximo - minimo) + minimo;
}
