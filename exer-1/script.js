/* let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 }; */
/* let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]; */
let player ={
  name:'Marta',
  lastName:'Silva',
  age:34,
  medal:{
    golden:2,
    silver:3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};
/* console.log(`A jogadora Marta Silva foi eleita a melhor do mundo por ${player.bestInTheWorld} vezes`); */
/* console.log(`A jogadora ${player.name} da ${player.lastName} tem ${player.age} anos de idade`) */
console.log(`A jogadora possui ${player.golden} medalhas de ouro e ${player.silver} medalhas de prata`);