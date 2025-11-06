export class Conta{

    // Atributos da Classe
    private _numero: number   // private indica que o atributo só essencial dentro da classe
    private _agencia: number
    private _tipo: number
    private _titular: string
    private _saldo: number

    // Método construtor
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero // this => representa a classe atual conta
        this._agencia = agencia
        this._tipo = tipo
        this._titular = titular
        this._saldo = saldo
    }
    // Métodos de acessos - Get e o Set -> Getters e Setters
    public set numero(novovalor: number){ // Set serve para atualizar os atributos de forma segura
        this._numero = novovalor
    }

    public get numero(){ // Get mostra valores e recupera 
        return this._numero
    }

    public get agencia() {
        return this._agencia;
    }

    public set agencia(agencia: number) {
        this._agencia = agencia;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get titular() {
        return this._titular;
    }

    public set titular(titular: string) {
        this._titular = titular;
    }

    public get saldo() {
        return this._saldo;
    }

    public set saldo(saldo: number) {
        this._saldo = saldo;
    }

    

}