const imc = require('./calculoIMC');
const readlineSync = require('readline-sync');

const userPeso = () => {
  return readlineSync.questionFloat("Qual seu peso?\n R: ")
}

const userAltura = () => {
  return readlineSync.questionFloat("Qual sua altura?\n R: ");
}

const peso = userPeso();
const altura = userAltura();



console.log(imc(peso, altura))