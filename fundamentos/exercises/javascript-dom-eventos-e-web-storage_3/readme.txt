var intro = document.getElementsByClassName('intro'); intro.setAttribute('id', 'Introduction_ 1') Adding ID to a new HTML element. ...
const terms = document. createElement('p'); ...
terms. setAttribute('id','para-1'); ...

https://backefront.com.br/adicionar-classe-js-puro/

const elemento = document.getElementById("elemento");

if (elemento.classList) elemento.classList.add("red");
else elemento.className += " red";