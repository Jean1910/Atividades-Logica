import { Conta } from "./Conta"

export function main() {

    //Instancia da classe conta
    // Instancia de um objeto
    const conta1: Conta = new Conta(12156, 108, 1, "Jean", 1000000000000)

    console.log("Titular da Conta: " + conta1.titular)

    conta1.saldo = 1000000000000
    
    console.log("Saldo da conta: " + conta1.saldo)
}

main()