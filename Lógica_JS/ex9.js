/*
09 - Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.

Exemplo:

repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/

function repetir(elemento, vezes){
    return Array(vezes).fill(elemento)
}

console.log(repetir("oi", 10))