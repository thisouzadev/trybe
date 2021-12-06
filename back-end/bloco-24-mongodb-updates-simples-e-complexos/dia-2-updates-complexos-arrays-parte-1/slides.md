---
theme: 'night'
transition: 'slide'
title:  '24.2 - Updates complexos parte I'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

### 24.2 - Updates complexos parte I

![](https://media.giphy.com/media/2xF0DWapVzdOASgB6z/giphy.gif)

--

### 24.2 - Updates complexos parte I

- Continuaremos utilizando updateOne( ) & updateMany( )
- Vamos trabalhar com Arrays
- Operadores: `$push`, `$pull`, `$pop` e `$addToSet`
- Modificadores: `$each`, `$slice` e `$sort`

--

### 24.2 - Updates complexos parte I

> Os arrays são um tipo de estrutura muito importante quando modelamos os dados em MongoDB, justamente porque com eles podemos agregar informações aos documentos e assim evitar os joins entre coleções

--

### 24.2 - Updates complexos parte I

> Esse é um conceito que deve estar muito bem definido para que a modelagem seja eficiente. Arrays podem armazenar desde informações simples como números ou strings até documentos com várias informações.

---

### Operador $push

![](https://media.giphy.com/media/xT5LMV6TnIItuFJWms/giphy.gif)

--

### Operador $push

> Adiciona **um** ou **mais** elementos a um array, lembrando que se o campo **não existir** no documento, esse operador **cria** o campo já adicionando o valor do elemento. (semelhante ao `$set`)

--

### Operador $push - Sintaxe

```js
db.collection.updateOne(
  { _id: 1 },               // filtro
  {
    $push: { field: 50 }    // operação
  },
  { ... }                   // opções
);
```

--

### Collection

```js
db.students.insertOne({
  _id: 1,
  name: "Alex",
  turma: "13 B"
});
```

--

### Operador $push

> A pessoa estudante de id 1 está sem nota, precisamos adicionar as respectivas notas de seus projetos: 10, 6, 8, 7, 3, 9.

--

### Operador $push

```js
// add score 10
db.students.updateOne({
  { _id: 1 },
  { 
    $push: { scores: 10 } 
  }
});

// add score 6
db.students.updateOne({
  { _id: 1 },
  { 
    $push: { scores: 6 } 
  }
});
```

--

### Operador $push

> Dessa forma fica inviável adicionar diversos valores para dentro do documento, então utilizaremos o **modificador** `$each`

---

### Operador `$push` & `$each`

```js
// add scores
db.students.updateOne({
  { _id: 1 },
  { 
    $push: { scores: $each: [8, 7, 3, 9] } 
  }
});
```

--

### Operador `$push` & `$each`

> Vamos incrementar esse exemplos, criaremos um novo campo para armazenar dados dos projetos de cada pessoa estudante. Para cada item vamos guardar

--

### Operador `$push` & `$each`

- O nome do projeto;

- A tecnologia nova testada no projeto (ex: React, node, Express, etc);

- A quantidade de horas para realizar o projeto.

--

### Operador `$push` & `$each`

```js
db.students.updateOne(
  { _id: 1 },
  {
    $push: {
      projetos: {
        nome: "Movie Card Library",
        tecnologia: "React",
        horas: 6
      }
    }
  }
);
```

--

### Operador `$push` & `$each`

> Populando nosso documento ...


```js
db.students.updateOne(
  { _id: 1 },
  {
    $push: {
      projetos:
      {
        $each: [
          { nome: "Movie Card Library Stateful", tecnologia: "React", horas: 4, order: 1 },
          { nome: "Movie Card Library CRUD", tecnologia: "React", horas: 3.5, order: 2 },
          { nome: "TrybeWallet", tecnologia: "Redux", horas: 4, order: 3 },
          { nome: "Trivia", tecnologia: "Redux", horas: 20, order: 4 },
          { nome: "Starwars Planet Search", tecnologia: "ContextApi + Hooks", horas: 4, order: 5 },
          { nome: "App Receita", tecnologia: "Group project", horas: 40, order: 6, softSkills: ["ágil", "acurácia", "comunicação"] },
        ]
      }
    }
  }
);
```

---

### Combinando modificadores com `$push`

> Vamos criar uma nova pessoa estudante com um atributo `quizzes`

--

### Combinando modificadores com `$push`

```js
db.students.insertOne(
  {
    _id: 2
    name: "Jen",
    quizzes : [
      { wk: 1, score : 10 },
      { wk: 2, score : 8 },
      { wk: 3, score : 5 },
      { wk: 4, score : 6 }
    ],
    turma: "13 B"
  }
);
```

--

### Combinando modificadores com `$push`

Uma vez tendo a Jennifer salva no nosso banco, suponha que precisássemos:

1. Adicionar novos resultados de testes feitos por Jennifer.
2. Guardar no campo quizzes somente os 3 testes com as maiores notas, ordenados de forma decrescente de acordo com a nota.

--

### Combinando modificadores com `$push`

```js
// 1. Adicionar novos resultados de testes feitos por Jennifer.
db.students.updateOne(
  { name: "Jennifer" },
  {
    $push: {
      quizzes: {
         $each: [
          { wk: 5, score: 8 },
          { wk: 6, score: 7 },
          { wk: 7, score: 6 }
        ],
      }
    }
  }
);
```

--

### Combinando modificadores com `$push`

```js
// 2. Guardar no campo quizzes somente os 3 testes 
// com as maiores notas, ordenados de forma decrescente 
// de acordo com a nota.

db.students.updateOne(
  { name: "Jennifer" },
  {
//  $push: {
//    quizzes: {
//      $each: [
//        { wk: 5, score: 8 },
//        { wk: 6, score: 7 },
//        { wk: 7, score: 6 }
//      ],
        $sort: { score: -1 },   // ordem decrescente
        $slice: 3               // corta tudo mas mantem os 3 primeiros
//    }
//  }
  }
);
```

--

### Combinando modificadores com `$push`

```js
db.students.updateOne(
  { name: "Jennifer" },
  {
    $push: {
      quizzes: {
         $each: [
          { wk: 5, score: 8 },
          { wk: 6, score: 7 },
          { wk: 7, score: 6 }
        ],
        $sort: { score: -1 },
        $slice: 3
      }
    }
  }
);
```

--

### Combinando modificadores com `$push`

> Vamos entender melhor no excalidraw

--

### Combinando modificadores com `$push`

> É importante sempre pensarmos na ordem de execução dos operadores/modificadores

--

### Combinando modificadores com `$push`

> Vamos aproveitar para adicionar mais dois projetos e aproveitar para ordena-los por:

- Tecnologia
- Nome do projeto

--

### Combinando modificadores com `$push`

```js
db.students.updateOne(
  { _id: 1 },
  {
    $push: {
      projetos: {
        $each: [
          { nome: "All for One", tecnologia: "MySql", horas: 4, order: 7 },
          { nome: "One for All", tecnologia: "MySql", horas: 4, order: 9 },
        ],
        $sort: { tecnologia: 1, nome: 1 }
      }
    }
  },
);
```

---

### Operador `$pull`

> Da mesma forma que adicionamos valores aos arrays, em algum momento teremos a necessidade de remover esses valores e para isso existe o operador $pull. 

--

### Operador `$pull`

> Esse operador remove de um array existente todos os elementos com um ou mais valores que atendam à condição especificada e também pode ser combinado com alguns dos modificadores que vimos no $push.

--

### Operador `$pull`

> Para ilustrar como aplicar remoção de elementos em um array, faremos uso de uma rede de supermercados:

--

### Operador `$pull`

```js
//restaurando a collection
db.stores.insertMany(
  [
    {
      _id: 1,
      fruits: ["apples", "pears", "oranges", "grapes", "bananas"],
      vegetables: ["carrots", "celery", "squash", "carrots"]
    },
    {
      _id: 2,
      fruits: ["plums", "kiwis", "oranges", "bananas", "apples"],
      vegetables: ["broccoli", "zucchini", "carrots", "onions"]
    }
  ]
);
```

--

### Operador `$pull`

> Agora vamos usar o operador `$pull` para remover do array `fruits` os elementos `apples` e `oranges`. Na mesma operação também removeremos `carrots` do array `vegetables`.

--

### Operador `$pull`

```js
db.stores.updateMany(
  {}, // sem filtro
  {
    $pull: {   // operação de remoção
      fruits: { $in: ["apples", "oranges"] },  // podemos utilizar o $in
      vegetables: "carrots"
    }
  }
);
```

--

#### Removendo elementos em um array de documentos com `$pull`

>  Mas e se nosso array fosse mais complexo, utilizando documentos aninhados, como acontece no projetos da nossa coleção de students?


```js
db.students.find({_id: 1});
```

--

#### Removendo elementos em um array de documentos com `$pull`

> Primeiro vamos remover o projeto `Movie Card Library` do array de projetos, utilizando o valor exato, como fizemos com vegetables: "carrots".

--

#### Removendo elementos em um array de documentos com `$pull`

```js
db.students.updateOne(
  { _id: 1 },
  {
    $pull: {
      projetos: { 
        nome: 'Movie Card Library', 
        tecnologia: 'React', 
        horas: 6 
      }
    }
  }
);
```

--

#### Removendo elementos em um array de documentos com `$pull`

> Um tanto quanto verboso não é?

--

#### Removendo elementos em um array de documentos com `$pull`

> A expressão do operador `$pull` aplica as condições a **cada elemento** do array `projetos` como se estivesse no primeiro nível.

--

#### Removendo elementos em um array de documentos com `$pull`

> Então, se quiséssemos remover dos projetos todos os elementos cujo tecnologia é "React", poderíamos fazer isso da seguinte forma:

--

#### Removendo elementos em um array de documentos com `$pull`

```js
db.students.updateOne(
  { _id: 1 },
  {
    $pull: {
      projetos: { tecnologia: 'React' }
    }
  }
);
```

--

#### Removendo elementos em um array de documentos com `$pull`

> Vamos remover dos projetos todos os itens que quantidade de horas seja menor ou igual a 4

--

#### Removendo elementos em um array de documentos com `$pull`

> Assim como acontece com o `$in` que vocês viram anteriormente, podemos utilizar outros operadores com o `$pull`, como os operadores de comparação `$gt`, `$gte`, `$lt` ou `$lte`.

--

#### Removendo elementos em um array de documentos com `$pull`

```js
db.students.updateOne(
  { _id: 1 },
  {
    $pull: {
      projetos: {
        // $lte funciona como um filtro
        horas: { $lte: 4 }
      }
    }
  }
);
```

---

### Operador `$pop`

> O operador $pop oferece uma maneira simples de remover o primeiro ou o último elemento de um array.

--

### Operador `$pop`

> Valide qual o primeiro elemento do array de projetos do estudante Alex, remova-o

```js
db.students.findOne(
  { _id: 1 },
  {name: 1, projetos: 1}
);
```

--

### Operador `$pop` - Removendo o 1° elemento

```js
db.students.updateOne(
  { _id: 1 },
  {
    // -1 indica que queremos remover o 1° elemento
    $pop: { projetos: -1 } 
  }
);
```

--

### Operador `$pop` - Removendo o último elemento

```js
db.students.updateOne(
  { _id: 1 },
  {
    // 1 indica que queremos remover o último elemento
    $pop: { projetos: 1 } 
  }
);
```

---

### Operador `$addToSet`

> O operador `$addToSet` é a maneira mais simples de garantir que os elementos de um array sejam únicos, ou seja, não tenham valores duplicados.

--

### Operador `$addToSet`

> Isso vale tanto para estruturas simples (arrays de strings ou números) como também para estruturas mais complexas (arrays de documentos).

--

### Operador `$addToSet`

> Para o caso de arrays de documentos, os nomes dos campos e valores devem ser exatamente os mesmos para que o MongoDB considere esse elemento como duplicado.

--

### Operador `$addToSet`

> Vamos ilustrar isso com um exemplo de inventário de uma loja. Para cada produto presente no inventário, guardaremos suas tags de classifição:

--

### Operador `$addToSet`

```js
db.inventory.insertOne({
  _id: 1,
  product: "polarizing_filter",
  tags: ["electronics", "camera"]
});
```

--

### Operador `$addToSet`

> Agora, ao invés de utilizar o $push para adicionar elementos ao array, vamos usar o $addToSet para garantir a unicidade dos elementos dentro do array tags.

--

### Operador `$addToSet`

```js
// vamos adicionar uma tag que ainda não existe
db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "accessories" } }
);
```

--

### Operador `$addToSet`

```js
// vamos ver o que acontece caso o elemento que está sendo passado no $addToSet já existir.
db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "camera"  } }
);
```

--

#### Adicionando múltiplos elementos de uma vez com $addToSet

> Observem que, mesmo adicionando diversas informações o `$addToSet` irá garantir que nada será duplicado.

--

```js
db.inventory.updateOne(
  { _id: 1 },
  {
    $addToSet: {
      tags: {
        $each: ["camera", "accessories", "camera", "photography"]
      }
    }
  }
);
```

--

#### Adicionando múltiplos elementos de uma vez com $addToSet

> Vamos testar com a coleção de estudantes

--

#### Adicionando múltiplos elementos de uma vez com $addToSet

```js
db.students.findOne(
  { _id: 1 },
  {
    projetos: 1
  }
);
```

--

#### Adicionando múltiplos elementos de uma vez com $addToSet

```js
db.students.updateOne(
  { _id: 1 },
  {
    $addToSet: {
      projetos: {
        $each: [
          { nome: "All for One", tecnologia: "MySql", horas: 4, order: 7 },
          { nome: "Aggregation", tecnologia: "MongoDB Aggregate", horas: 5, order: 6 }
        ]
      }
    }
  }
);
```

---

### Trabalhando com ArrayFilters

> Vamos adicionar outras 2 pessoas estudantes

--

### Trabalhando com ArrayFilters

```js
// adicionando as pessoas
db.students.insertMany(
  [
    {
      name: "Tobias",
      turma: 100
    },
    {
      name: "Camila",
      turma: 101
    }

  ]
);
```

--

### Trabalhando com ArrayFilters

> Vamos também adicionar 3 projetos para todas as pessoas estudantes

--

### Trabalhando com ArrayFilters

```js
// adicionando os projetos
db.students.updateMany(
  {},
  {
    $addToSet: {
      projetos : {
        $each: [
          { nome: 'One for All', tecnologia: 'MySql', horas: 4, order: 9 },
          { nome: 'All for One', tecnologia: 'MySql', horas: 4, order: 7 },
          {
            nome: 'Aggregation',
            tecnologia: 'MongoDB Aggregate',
            horas: 5,
            order: 6
          }
        ]
      }
    }
  }
);
```

--

### Trabalhando com ArrayFilters

> Vamos alterar a quantidade de horas do projeto `Aggregation` da `Camila`

--

### Trabalhando com ArrayFilters

```js
db.students.updateOne(
  { name: "Camila" },
  {
    //$[elemento] se refere a elemento como uma variável
    $set: {
      "projetos.$[elemento].horas": 7
    }
  },
  {
    // atribuindo valor a variável no filtro do array
    arrayFilters: [{ "elemento.nome": "Aggregation" }]
  }
);
```

--

### Trabalhando com ArrayFilters

```js
db.students.updateOne(
  { name: "Camila" },
  {
    //$[elemento] se refere a elemento como uma variável
    $set: {
      "projetos.$[elemento].order": 999
    }
  },
  {
    // atribuindo valor a variável no filtro do array
    arrayFilters: [{ "elemento.tecnologia": "MySql" }]
  }
);
```

--

### Dúvidas ?

![](https://media.giphy.com/media/ymOC1DfccnTQ6pMXFD/giphy.gif){width=100%}