---
theme: 'night'
transition: 'slide'
title:  '26.3 - Testes em NodeJS'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

### Testes de Back-end com Node.js

---

### TDD - Test-driven development

> Durante essa aula seguiremos a prática to TDD, sendo assim partiremos pela criação dos testes a partir dos requisitos que queremos cobrir até chegar à implementação de fato.

---

### TDD

> A técnica auxilia no entendimento do negócio do software, deixando claras as regras de negócio antes mesmo de iniciar a codificação, obtendo assim, simplicidade e maior confiança no código produzido

---

### Task

> Iremos criar um script que leia o conteúdo de um arquivo utilizando o módulo fs, e utilizaremos também a interface promises dele com async/await.

---

### Ferramentas

- NodeJS
- Mocha (Descrever os testes (describe))
- Chai (Checar (assert))
- Sinon (Mocar (mock))

---

### Iniciando o projeto

```sh
npm init -y
npm install mocha chai sinon -D
```

---

### Iniciando o projeto

> Precisamos criar o local dos testes `"tests/readFile.js"`

---

> Primeiro precisamos pensar na estrutura que iremos testar, a ideia é termos uma função readFile que receba um nome de arquivo e, então, retorne uma promise com o seu conteúdo.

---

> Lembre-se: no conceito de testes unitários, onde é testado uma unidade do código, nesse nosso exemplo estaremos jutamente fazendo isso. Testando apenas uma função específica.

---

### Casos de teste

- O arquivo deve ser lido com sucesso
  - deve retornar uma string
  - deve ser igual ao conteúdo do arquivo

- Erro na leitura do arquivo
  - o resultado é null

---

### Verificações com o CHAI

[chai](https://www.chaijs.com/api/bdd/)

---

### Antes de testarmos

> Precisamos criar o script de execução no `package.json`

```json
{
  "scripts": {
    "test": "mocha tests"
  },
}
```

---

