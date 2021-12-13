function fizzBuzz(number) {
  return new Promise((resolve, reject) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return resolve('FizzBuzz');
    }

    if (number % 3 === 0) {
      return resolve('Fizz');
    }

    if (number % 5 === 0) {
      return resolve('Buzz');
    }

    reject(number);
  });
}

fizzBuzz(1).catch(console.error);
fizzBuzz(3).then(console.log);
fizzBuzz(5).then(console.log);
fizzBuzz(15).then(console.log);