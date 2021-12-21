---
theme: 'night'
transition: 'slide'
title:  '26.4 - Express: HTTP com Node.js'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

### 26.4 - Express: HTTP com Node.js

![express](https://media.giphy.com/media/8F3bK4aq1tCo0TLkf7/giphy.gif)

--

### HTTP: Hyper-Text Transfer Protocol

```sh
curl www.google.com
```

--

### Pra que serve o HTTP?

> Para que ambas as partes, possam se entender

---

### Trabalhando com Postman/Insomnia/VsCode

> Utilizaremos uma ferramenta API-Client para testar nossos end-points.

---

### Iniciando com Express

```sh
$ npm init -y
$ npm i express
$ touch index.js
```

---

### Iniciando nosso servidor

```js
// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log(`App ouvindo a porta 3000!`));
```

--

### Criando novas rotas

```js
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/hello', (req, res) => {
  res.send({ message: 'Hello again World!' });
});

// app.listen(3000, () => console.log(`App ouvindo a porta 3000!`));
```

--

### Utilizando nodemon

```sh
$ npm i nodemon -D
```

--

### Middleware de validação

```js
const authMiddleware = (req, res, next) => {
  /* se tem um token de autorização, passa pro callback da rota */
  if (req.headers.authorization) {
    next();
  } else {
    /* não tem token? volta um 401 com uma mensagem de erro */
    res.status(401);
    res.send({ message: 'Token Inválido' });
  }
};

/* registramos o middleware */
app.use(authMiddleware);
```

--

### Middleware de Log

```js
const logRequestMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
};
```

--

### Express Router

```js
const router = express.Router();  
```

--

### Erros

```js
const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado :(');
};


app.get('/error', (req, res) => {
  throw new Error('Eu retorno um erro!');
});

app.use(errorHandlerMiddleware);
```

--

### Middleware nativo

```js
app.use(express.json());

app.post('/login', (req, res) => {
  /* a requisição vai ser logada no console como um JSON */
  console.log(req.body);
  res.send(req.body);
});
```

--

### Como ficaria sem o Express ?

```js
const http = require('http');

const server = http.createServer((request, response) => {
  /* Primeiro, garantimos que a rota é /login e que o método é POST */
  if (request.url !== '/login' || request.method !== 'POST') {
    /* Configuramos o header content-type para application/json, e o status para 404 */
    response.writeHead(404, { 'Content-Type': 'application/json' });
    /* Enviamos o corpo da resposta como JSON. Note o use de JSON.stringify,
       pois queremos enviar uma String, e não um objeto */
    response.write(JSON.stringify({ message: 'Page not found' }));
    /* Finalizamos o envio da resposta */
    response.end();
    /* Encerramos o processamento dessa request */
    return;
  }

  /* Variável para armazenar cada "pedaço" do body da requisição */
  const data = [];

  /* Toda vez que recebermos um pedaço, adicionamos ele à variável `data` */
  request.on('data', (chunk) => data.push(chunk));

  /* Quando terminarmos de receber todo o conteúdo da requisição */
  request.on('end', () => {
    /* Juntamos todos os "pedaços" do body em uma única string */
    const jsonBody = Buffer.concat(data).toString('utf8');
    /* Convertemos o JSON para um objeto JavaScript */
    const body = JSON.parse(jsonBody);

    /* Configuramos o status da resposta como 200, e o tipo como JSON */
    response.writeHead(200, { 'Content-Type': 'application/json' });
    /* Enviamos de volta o corpo da requisição que recebemos */
    response.write(JSON.stringify(body));
    /* Encerramos a resposta */
    response.end();
  });
});

/* Iniciamos o servidor para que ele comece a escutar a porta 3000, esperando por requests */
server.listen(3000, () => console.log('Listening on 3000'));
```