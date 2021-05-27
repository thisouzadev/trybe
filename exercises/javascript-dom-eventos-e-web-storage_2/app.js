const elemento_pai = document.body;
let titulo = document.createElement('h1');
elemento_pai.appendChild(titulo);
let texto =  document.createTextNode('Exercício 5.2 - JavaScript DOM');
titulo.appendChild(texto);


let div = document.createElement('div');
elemento_pai.appendChild(div).classList.add('main-content');
