---
theme: 'night'
transition: 'slide'
title:  '26.1 Introdução ao desenvolvimento Web com NodeJS'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

### Boas vindas a NodeJS

![nodejs](https://www.logigroup.com/images/modules/technologies/framework/nodejs.gif)

--

### 26.1 Introdução ao desenvolvimento Web com NodeJS

--

### 26.1 Introdução ao desenvolvimento Web com NodeJS

- Pacotes Node
- NPM CLI
- npmjs.org
- Execução de scripts com NodeJS

--

### Alinhamentos

- Primeiro Bloco
- Dia I e II
- Escuta ativa, foco!

---

> Versão do node durante as aulas

---

### O que é o node?

- Node é um runtime de javascript
- É uma linguagem dinâmica, ela não sabe o que tem em seu arquivo

---

### Bora começar?

> Hello World

---

### Execução

- Todo arquivo `.js` é um módulo;
- Existe um Wrapper (envelope) pode trás dos panos;

---

### Wrapper (envelope)

```js
(function = (exports, require, module, __filename, __dirname) => {
  // aqui vem nosso módulo
});
```

---

### Wrapper (envelope)

- Teremos acesso a todos esses parametros dentro do nosso módulo

```js
exports()
require()
module()
```

---

### Exportando o módulo

```js
//index.js
const funcao = () => { ... }

module.exports = funcao
```

---

### Exportando o módulo ou parte dele

```js
//index.js
const a = 10;
const b = 30;

module.exports = { a };
```

---

### Porque isso é necessário?

> Precisaremos o tempo todo utilizar funções de outros arquivos

---

### Mas lembre-se ...

> É uma linguagem dinâmica, logo todo arquivo será executado ao realizar uma importação

---

### Vamos fazer um require

> Utilizamos o `require` para importar/utilizar módulos locais

---

### Atenção as funções que serão executadas

> Todas funções executadas no módulo, também serão executadas na importação

---

### Pacotes

> Podemos também criar nossos próprios pacotes NPM

---

### Pacotes

[NPM](https://www.npmjs.com/)

---



