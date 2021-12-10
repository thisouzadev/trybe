const readlineSync = require('readline-sync');


const resultado = (numero, resposta) => {
  if (resposta !== numero) {
    return console.log("Parabéns, número correto!");
  }
  return `Opa, não foi dessa vez. O número era ${numero}`
}

const runGame = () => {
  const resposta = readlineSync.questionInt('Escolha um numero de 0 a 10\nR: ')
  const number = Math.floor(Math.random() * 11);
  
  resultado(resposta, number)

  const novamente = readlineSync.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if (novamente !== 's') {
    return console.log('OK, até a próxima!');
  }
  runGame();
}
runGame()