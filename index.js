function novalinha(a, b) {
  // cria uma linha
  let linha = document.createElement("tr");
  // cria uma célula
  let valor = document.createElement("td");
  valor.innerHTML = a;
  linha.appendChild(valor);
  // cria uma célula
  let multiplicador = document.createElement("td");
  multiplicador.innerHTML = b;
  linha.appendChild(multiplicador);
  // cria uma célula
  let resultado = document.createElement("td");
  resultado.innerHTML = a * b;
  linha.appendChild(resultado);

  document.getElementById("corpo").appendChild(linha);
}

function tabuada() {
  let numero = document.getElementById("numero").value;
  if (numero !== "") {
    numero = parseInt(numero);
    if (isNaN(numero) == false) {
      //limpa o corpo da tabela
      document.getElementById("corpo").innerHTML = "";

      for (let i = 0; i <= 10; i++) {
        novalinha(numero, i);
      }
      document.getElementById("tabela").className = "exibindo";
    } else {
      document.getElementById("tabela").className = "escondido";
    }
  } else {
    document.getElementById("tabela").className = "escondido";
  }
  //limpa o campo de entrada
  document.getElementById("numero").value = "";
}
