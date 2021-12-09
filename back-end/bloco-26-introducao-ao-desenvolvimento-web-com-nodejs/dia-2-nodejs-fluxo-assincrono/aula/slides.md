---
theme: 'night'
transition: 'slide'
title:  '26.2 Fluxo Assíncrono'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

### 26.2 Fluxo Assíncrono

![sync](https://media.giphy.com/media/2UtegbQgkGyQOjMSko/giphy.gif)

---

### 26.2 Fluxo Assíncrono

- Callbacks
- Promises
- Tratamento de erros

---

#### Introdução à código assíncrono: Callbacks e Promise

> Hoje vamos entender o que é fluxo assíncrono e porque ele é tão importante para a performance de programas escritos em Node.js.

--

### Introdução à código assíncrono

> Imagine que precisamos executar uma função somente após um determinado tempo. Para isso, temos uma função nativa em javascript que se chama setTimeout. Vamos utilizá-la para esperar 3 segundos.

--

### Introdução à código assíncrono

```js
function main() {
  console.log('Início da função main');

  setTimeout(() => {
    console.log('O tempo passou.');
  }, 3000);

  console.log('Fim da função main');
}

main();
```

--

### Introdução à código assíncrono

> Reparem que a frase "O tempo passou." só foi printada na tela após o fim da função main. Isso acontece pois a função que passamos para o `setTimeout` **é assíncrona**! A ideia é que ela vai executar em **OUTRA** região de memória do seu programa.

--

### Introdução à código assíncrono

> Nesse exemplo em específico, o primeiro `console.log()` e o último são funções síncronas, que serão executadas de forma sequencial no **mesmo lugar da memória** (pilha de execução da função main).

--

> O setTimeout é uma Callback, e não vai executar no mesmo local. Ela é uma callback que será disparada somente após o tempo de 3 segundos passar. 

--

> O Event Loop, que é um mecanismo interno do Node.js, vai checar constantemente se o tempo já passou; se o tempo já tiver passado, ele vai enfileirar essa função para ser executada após todo o código síncrono terminar de executar. Isso significa que o código assíncrono (callbacks) só são executados **quando não há mais código síncrono para ser executado**.

--

> Por causa disso, **não há garantia de que a callback será executada exatamente 3 segundos após o setTimeout ter sido disparado**. Pode ser que o programa síncrono fique agarrado, por exemplo, em um laço infinito, e dessa forma a callback nunca será executada.

--

> Isso ocorre pois o runtime Node.js tem uma thread só, ou seja, ele não faz as coisas em paralelo. Ele faz as coisas de forma assíncrona, de forma concorrente, mas não paralelas. É possível fazer paralelismo em Node.js, mas não veremos isso na aula de hoje.

--

> A ideia é que a espera pelo tempo especificado no setTimeout não precisa bloquear a execução do resto do código.

--

> Isso é extremamente útil para escrever servidores web. Servidores web lidam com operações de alta latência (tempo de resposta), como escrita/leitura em disco, banco de dados, comunicação com serviços externos e etc. 

--

> Imagine como seria se nosso servidor web só pudesse lidar com uma requisição por vez? Se 1000 clientes fizessem requisições ao mesmo tempo para o nosso servidor, imagine a demora que seria para tratar uma requisição atrás da outra?

---

### Mas e se quisermos esperar por uma callback?

> Callbacks não foram feitas para serem esperadas. A ideia da callback é que ela não será aguardada; ela será executada de forma assíncrona, em outro momento. 

--

> No caso do exemplo, a função console.log('O tempo passou.') será empilhada na pilha de execução somente após a função main() retornar, ou seja, não é possível esperar pela sua execução, pois ela vai ser executada em outro momento, em outra região da memória.

--

> Para resolver o problema de aguardar a execução de callbacks, o conceito de **promises** foi inventado.

--

> Promise é um construto da linguagem que nos permite esperar callbacks. A ideia é que podemos encapsular uma callback dentro de uma promessa, e permitir ao usuário a oportunidade de esperar pela promessa.

--

> A promessa funciona da seguinte maneira: "eu prometo te entregar o resultado dessa callback, se você esperar por ela"

--

### Promises

```js
const setTimeoutPromise = () => {
  return new Promise((resolve, reject) => { });
}

// function main() {
//   console.log('Início da função main');

//   console.log('Fim da função main');
// }

// main();
```

--

> Ao criarmos uma `Promise` ela recebe uma função com dois parâmetros: `resolve` e `reject`. Vamos adicionar nosso `setTimout` dentro da `Promise`

--

```js
// const setTimeoutPromise = () => {
//   return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('O tempo passou.')
      resolve();
    }, 3000);
  // });
// }

// function main() {
//   console.log('Início da função main');

//   console.log('Fim da função main');
// }

// main();
```

--

> Precisamos executar a chamada da nossa promise para ver acontecer ...

--

```js
// ...

setTimeoutPromise();

// ...
``` 

--

> Tudo parece igual, pois mesmo com essa Promise ainda estamos executando uma callback, então precisamos falar para o node esperar essa callback, para só então ele seguir o fluxo.

--

```js
const setTimeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('O tempo passou.')
      resolve();
    }, 3000);
  });
}

async function main() {
  console.log('Início da função main');

  await setTimeoutPromise();

  console.log('Fim da função main');
}

main();
```

---

###  Afinal, pra quê utilizar fluxo assíncrono? 

> Agora vamos tentar entender porquê utilizamos fluxo assíncrono e por quê trabalhar com Promises é tão útil e performático.

--

> Já falamos que o grande ganho em utilizar fluxo assíncrono é o fato de que não precisamos esperar por operações de alta latência. Operações de alta latência são operações que dependem de entrada e saída do nosso programa. Por exemplo, leitura e escrita em disco; leitura e escrita no banco de dados;

--

> A ideia é que essas operações não precisam bloquear o fluxo de execução do código. O código pode seguir a execução e, quando essas operações estiverem "prontas", elas serão executadas.

--

> Vamos fazer uma requisição para uma API de pokemon

[API](https://pokeapi.co/api/v2/pokemon/1)

--

> Vamos trabalhar com uma biblioteca externa `Axios`, ela será responsável por fazer a requisição na API de pokemons

--

```sh
npm init -y
npm install axios
```

--

```js
const axios = require('axios');

function main() {
  const response = axios.get('https://pokeapi.co/api/v2/pokemon/1');

  console.log(`Pokemon: ${response.data.name}`);
}

main();
```

--

> Percebam que ocorreu um erro, pois não esperamos pelo retorno da Promise.

--

```js
const axios = require('axios');

async function main() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1');

  console.log(`Pokemon: ${response.data.name}`);
}

main();
```

--

### Melhorando o código

```js
const axios = require('axios');

const getPokemonById = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return response.data;
}

async function main() {
  const pokemon = getPokemonById(1);

  console.log(`Pokemon: ${pokemon.name}`);
}

main();
```

--

> Como posso fazer a requisição para os 50 primeiros pokemons?

--

```js
for (let i = 1; i <= 50; i++) {}
```

--


> Bom, acabamos de estudar que a maior vantagem do runtime Node.js é conseguir realizar operações de alta latência de forma concorrente. O que isso quer dizer? 

--

> Uma requisição web é uma operação de alta latência. Há um tempo de resposta. E se pudéssemos disparar todas as requisições juntas, ao invés de esperar uma terminar para começar a próxima? Essa é a vantagem de Node.js: utilizamos fluxo assíncrono para realizar operações de alta latência sem que essas bloqueiem o fluxo de execução.


--

> Para fazer isso, ao invés de esperar pelo resultado da Promise, vamos adicionar todas as Promise's em um array e esperar por todas ao mesmo tempo.

--

```js
async function main() {
  const promises = []
  for (let i = 1; i <= 50; i++) {
    const promise = getPokemonById(i);
    promises.push(promise);
  }
 }
```

--

```js
// async function main() {
//   const promises = []
//   for (let i = 1; i <= 50; i++) {
//     const promise = getPokemonById(i);
//     promises.push(promise);
//   }

  pokemons = await Promise.all(promises);
  pokemons.forEach(
    pokemon => console.log(`Pokemon: ${pokemon.name}`)
  );
// }
```

--

