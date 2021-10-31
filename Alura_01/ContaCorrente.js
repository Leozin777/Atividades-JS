import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;

    set cliente(NovoValor){
        if(NovoValor instanceof Cliente){
            this._cliente = NovoValor;
            
        }
    }

    get cliente(){
        return this._cliente;
    }

    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }

    }

    depositar(valor){
        if(valor <= 0 ){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const ValorSacado = this.sacar(valor);
        conta.depositar(ValorSacado);
    }
}