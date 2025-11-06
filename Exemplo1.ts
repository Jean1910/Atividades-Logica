// Declaração da função 

export function somar(a: number, b: number): number {
   
    // logica da função

    let resultado: number = a + b // 2 + 2 => resultado = 4 

    return resultado
}

// Chamada da função 

let valor: number = somar(7, 12)
console.log("O resultado da sua adição e valor: " + valor)