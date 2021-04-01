const fatorial = (n) => (n == 0) ? 1 : (n * fatorial(n - 1));

console.log(fatorial(5));
console.log('\n*******************************************************************\n');


//String que será avaliada
let string = "Antônio foi no banheiro e não sabemos o que aconteceu"; // retorna 'aconteceu'
//Declaro a maior string vazia
let big = "";
//Transformo a string em uma lista com o split, separando por espaços em branco
string.split(' ').forEach(word => {
  if (word.trim().length > big.length) {
    big = word.trim();
  }
});
console.log(big);
console.log('\n*******************************************************************\n');
//Também transformo a string em uma lista com o split, mas utilizo do reduce para retornar a maior palavra
let bigger = string.split(' ').reduce((acumulador, valorCorrente) => {
  if (acumulador.length < valorCorrente.trim().length) {
    return valorCorrente.trim();
  }
  return acumulador;
}, '');
console.log(bigger);
console.log('\n*******************************************************************\n');
//Novamente o split, mas dessa fez é efetuado um for simples
let palavras = string.split(" ");
let bigFor = "";

for (word of palavras) {
  if (word.trim().length > bigFor.length) {
    bigFor = word.trim();
  }
}

console.log(bigFor);

console.log('\n*******************************************************************\n');

const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill) =>
    result = `${result}

    - ${skill}`)

    result = `
    ${result}

    #goTrybe
    `

    return result;
}

console.log(buildSkillsPhrase("Thiago"));


