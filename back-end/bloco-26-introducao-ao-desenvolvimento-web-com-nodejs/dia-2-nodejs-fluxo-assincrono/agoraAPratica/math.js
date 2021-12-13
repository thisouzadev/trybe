const readline = require('readline-sync');
const doMath = (a, b, c) => {
  return new Promise((resolve, reject) => {
    console.log('valor do primeiro numero', a);
    console.log('valor do segundo numero', b);
    console.log('valor do terceiro numero', c);
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error("Informe apenas números"));
    }
    const result = (a + b) * c;

    if (result > 50) {
      return reject("Valor muito baixo");
    }
    resolve(result);
  })
}
// doMath(10, 10, 10)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

// doMath(1, 1, 'a')
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

// doMath(1, 1, 1)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callDoMath() {
  //   /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  try {
    const result = await doMath(...randomNumbers);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
callDoMath()
