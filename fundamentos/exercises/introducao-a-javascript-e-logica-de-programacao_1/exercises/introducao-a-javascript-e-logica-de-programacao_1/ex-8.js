//Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
//Bonus: use somente um if .

let a = 5;
let b = 5;
let c = 3;

let ePar = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
ePar = true;
}
console.log(ePar);