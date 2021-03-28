var valorEmDolarTexto = prompt("Qual o valor em dólar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)

//Atento
//variáveis var, int, float, string
//função alert, parseInt, parseFloat, prompt
//operações + somar, * multiplicar
// comentário final com //