const readlineSync = require('readline-sync');


const velocidade = () => {
    const distancia = readlineSync.questionFloat("Qual a distancia?(m)\n R: ");
    const tempo = readlineSync.questionFloat("Qual o tempo?(s)\n R: ");


    const calculoVelocidadeMedia = (distancia / tempo).toFixed(2);

    console.log(`sua velocidade é de ${calculoVelocidadeMedia}`);
}

velocidade()