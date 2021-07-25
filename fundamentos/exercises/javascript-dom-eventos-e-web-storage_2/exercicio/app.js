// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const elemento_pai = document.body;
let titulo = document.createElement('h1');
titulo.innerHTML = 'Exercício 5.2 - JavaScript DOM'
elemento_pai.appendChild(titulo);

// 2. Adicione a tag div com a classe main-content como filho da tag body ;
const elementDivFather = document.createElement('div');
elementDivFather.className = 'main-content'
elemento_pai.appendChild(elementDivFather);

// 3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
const elementDivCenter = document.createElement('div');
elementDivCenter.className = 'center-content';
elementDivFather.appendChild(elementDivCenter)

// 4 Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
const pSan = document.createElement('p');
pSan.innerHTML = 'coloque algum texto';
elementDivCenter.appendChild(pSan)

// 5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
const divLeftContent = document.createElement('div');
divLeftContent.className = 'left-content';
elementDivFather.appendChild(divLeftContent);

//6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
const divRightContent = document.createElement('div');
divRightContent.className = 'right-content';
elementDivFather.appendChild(divRightContent);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 
// e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
const img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
divLeftContent.appendChild(img);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista.
// Essa lista deve ser filha do div criado no passo 6;
const ul = document.createElement('ul');
divRightContent.appendChild(ul);
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index in arrayNumbers) {
  const li = document.createElement('li')
  li.innerHTML= arrayNumbers[index]
  ul.appendChild(li)
}

// 9. Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
// 2. Adicione a classe description nas 3 tags h3 criadas;
for (let i = 1; i <=3; i++) {
  const h3 = document.createElement('h3');
  elementDivFather.appendChild(h3)
  h3.className = 'description'
}

// 1. Adicione a classe title na tag h1 criada;
titulo.className = 'title'

// 3. Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
elementDivFather.removeChild(divLeftContent) // pai.removechild(filho)

// 4. Centralize o div criado no passo 6 (aquele que possui a classe right-content ).
// Dica: para centralizar, basta configurar o margin-right: auto do div ;
divRightContent.style = "margin-right:auto"

// 5.Troque a cor de fundo do elemento pai da div criada no passo 3 
// (aquela que possui a classe center-content ) para a cor verde;
elementDivCenter.style = "background: green"

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
ul.lastChild.remove();
ul.lastChild.remove();
