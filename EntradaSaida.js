//Importando a biblioteca
const leia = require('readline-sync')

// declaração de variavel
let name, distancia

//Entrada de dados
console.log("Digite o seu nome:")
nome = leia.question()

console.log("\nDigite a distancia percorrida em sua corrida: ")
distancia = leia.questionFloat()

//Saida de dados
console.log("\nBom dia," + nome)
console.log("\ndistancia percorrida foi de:" + distancia)