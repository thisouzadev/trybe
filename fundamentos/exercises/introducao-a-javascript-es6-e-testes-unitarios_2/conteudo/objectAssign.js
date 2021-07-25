// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

/* Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4); */

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

console.log("\n*******************************************************************\n");

const person2 = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person2, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person2); // { name: 'Roberto', lastName: 'Silva' }

console.log("\n*******************************************************************\n");

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person2); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person2.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person2); // Output: { name: 'Maria', lastName: 'Ferreira' }

console.log("\n*******************************************************************\n");

/* podemos passar como primeiro parâmetro do Object.assign um objeto vazio
 {} e armazenar seu retorno em uma nova variável.  */
const person3 = {
  name: 'Roberto',
};

const lastName2 = {
  lastName: 'Silva',
};

const newPerson = Object.assign({}, person3, lastName2);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person3);