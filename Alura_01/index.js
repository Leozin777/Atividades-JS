import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 111222333444);

const cliente2 = new Cliente("Leonardo", 111222333555);

const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
ContaCorrenteRicardo.depositar(101);

const conta2 = new ContaCorrente(1002, cliente2)

ContaCorrenteRicardo.transferir(100, conta2);

console.log(cliente2);

