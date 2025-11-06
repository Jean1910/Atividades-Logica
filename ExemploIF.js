const leia = require('readline-sync')

let idade 

console.log("Digite sua idade:")
idade = leia.question()

// Processamento - IF
if (idade < 18){
    console.log("Voce não pode dirigir!")
}

console.log("fim do programa!")