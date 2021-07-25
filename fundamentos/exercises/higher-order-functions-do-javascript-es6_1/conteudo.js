const employeesGenerator = (fullname) => {
  const email = fullname.toLowerCase().replace(' ','_');
  return {fullname, email: `${email}@trybe.com`};
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  };
  return employees;
};

console.log(newEmployees(employeesGenerator));


console.log(`\n**********************************************************************\n`);

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
console.log('\n********************************************************\n');
// Sugestão de respostas a serem validadas.
const correctAnswer = 'Higher Order Function';
const userAnswer = 'HIGHER ORDER FUNCTION';

const xablau = (gabarito) => (resposta) => gabarito === resposta.toLowerCase();

console.log(xablau(correctAnswer)(userAnswer));

