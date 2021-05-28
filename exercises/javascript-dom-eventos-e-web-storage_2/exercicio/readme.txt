Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
Adicione a tag div com a classe main-content como filho da tag body ;
Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.


Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
Adicione a classe title na tag h1 criada;
Adicione a classe description nas 3 tags h3 criadas;
Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.


http://devfuria.com.br/javascript/dom-create-element/
https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom-pt


className	Obtém ou define o valor de classe	element.className;
classList.add()	Adiciona um ou mais valores de classe	element.classList.add('active');
classList.toggle()	Liga ou desliga uma classe	element.classList.toggle('active');
classList.contains()	Verifica se o valor de classe existe	element.classList.contains('active');
classList.replace()	Substitui um valor de classe existente com um novo valor de classe	element.classList.replace('old', 'new');
classList.remove()	Remove um valor de classe	element.classList.remove('active');