/*
04 - Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

Exemplo:

receberNomeDoMes(1) // retornará "janeiro"
*/
function receberNomeDoMes(valor){
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    return meses[--valor];
}

console.log(receberNomeDoMes(1))