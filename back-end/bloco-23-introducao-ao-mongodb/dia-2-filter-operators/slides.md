---
theme: 'night'
transition: 'slide'
title:  'Filter Operators'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

### 23.2 - Filter operators

- Operadores de comparação: $lt, $lte, $gt, $gte $eq, $ne, $in e $nin;
- Operadores lógicos: $not, $nor, $and e $or;
- Operadores de elementos: $exists.

---

<!-- ### Ordenação e Contagem

```js
db.inventory.find({ }).sort({ ano: 1 }); //order by ano asc
db.inventory.find({ }).sort({ ano: -1 }); //order by ano desc

db.filmes.count(); //ou
db.filmes.find({}).count(); // o retorno é o mesmo

-- -->

### Recuperando nosso dataset

```js
use meubancodedados;

db.filmes.insertMany(...);
```

--

### Operadores de comparação

> Como o próprio nome diz, esses operadores servem para fazermos comparações nos documentos de uma coleção. Eles são passados como parâmetros de filtro (query filters) no método find(), por exemplo.

--

### Operadores de comparação

```js
db.collection.find({ /*FILTER*/ }, { /*PROJECTION*/ });
```

--

### Operador $lt 'menor que'

```js
// less than (menor que)
// $lt == '<'

// db.collection.find({ quantity: { $lt: 10 } });
// WHERE quantity < 10
```

--

### Operador $lt 'menor que'


> Retorne todos os documentos da coleção filme em que o ano seja menor que 2000.


--

### Operador $lt 'menor que'

```js
// Retorne todos os documentos da coleção filme em que 
// o ano seja menor que 2000.

db.filmes.find({ ano: { $lt: 2000 } });

// em sql:
// SELECT * FROM filmes WHERE ano < 2000;
```

---

### No Shell - Melhorando o retorno

> Adicione ao final da query a função `Pretty()`

--

### .pretty( )

Formata o retorno para json

```js
db.filmes.find({ ano: { $lt: 2000 } }).pretty();
```

---

### Operador $lte (menor ou igual)

```js
// less than or equal (menor ou igual)
// $lte == '<='

// db.collection.find({ quantity: { $lte: 5 } });
// WHERE quantity <= 5
```

--

### Operador $lte (menor ou igual)

> Retorne todos os documentos da coleção filmes em que o campo ano seja menor ou igual a 2000

--

### Operador $lte (menor ou igual)

```js
// Retorne todos os documentos da coleção 
// filmes em que o campo ano seja menor ou igual a 2000

db.filmes.find({ ano: { $lte: 2000 } });

// em sql:
// SELECT * FROM filmes WHERE ano <= 2000;
```

---

### Operador $gt (maior que)

```js
// greater than (maior que)
// $gt == '>'

// db.collection.find({ quantity: { $gt: 10 } });
// WHERE quantity > 10
```

--

### Operador $gt (maior que)

> Retorne todos os documentos da coleção filmes em que o campo ano seja maior que 1993.

--

### Operador $gt (maior que)

```js
// Retorne todos os documentos da coleção filmes em que o 
// campo ano seja maior que 1993.

db.filmes.find({ ano: { $gt: 1993 } });

// em sql:
// SELECT * FROM filmes WHERE ano > 1993;
```

--

### Operador $gt (maior que)

> Quantos documentos foram retornados?

--

### Operador $gt (maior que)

```js
// utilizando a função count() após o find é possível saber
// a quantidade de documentos retornado

db.filmes.find({ ano: { $gt: 1993 } }).count();
```

---

### Operador $gte (maior ou igual que)

```js
// greater than or equal (maior ou igual que)
// $gte == '>='

// db.collection.find({ quantity: { $gte: 10 } });
// WHERE quantity >= 10
```

--

### Operador $gte (maior ou igual que)

> Retorne todos os documentos da coleção filmes em que o campo ano seja maior ou igual a 1993.

--

### Operador $gte (maior ou igual que)

```js
// Retorne todos os documentos da coleção filmes em que o 
// campo ano seja maior ou igual a 1993.

db.filmes.find({ ano: { $gte: 1993 } });

// em sql:
// SELECT * FROM filmes WHERE ano >= 1993;
```

---

### Combinando Operadores

> No SQL utilizamos o BETWEEN para procurarmos valores dentro de um range

```sql
SELECT * FROM filmes WHERE ano BETWEEN 1993 AND 2000;
```

--

### Combinando Operadores

```js
db.filmes.find(
    { ano: { $gte: 1993, $lte: 2000 } }
);
```

---

### Operador $eq (igual)
```js
// equal (igual)
// $eq == '=='

// db.collection.find({ quantity: { $eq: 10 } });
// WHERE quantity = 10
```

--

### Operador $eq (igual)

> Seleciona todos os documentos da coleção filmes em que o valor do campo ano seja igual a 1993

--

### Operador $eq (igual)

```js
db.filmes.find({ ano: { $eq: 1993 } });
```

---

### Embedded Documents :eyes:

> Seleciona todos os documentos da coleção filmes em que o campo avaliacao do sub-documento bom é igual a 7

--

### Embedded Documents

```js
// Seleciona todos os documentos da coleção filmes 
// em que o campo avaliacao do sub-documento bom é igual a 7

db.filmes.find({ "avaliacao.bom": { $eq: 7 } });
```

---

### Operador $ne (não igual)

```js
// not equal (não igual || diferente)
// $ne == '!='

// db.collection.find({ name: { $ne: "guilherme" } });
// WHERE name <> "guilherme"
```

--

### Operador $ne (não igual)

> Selecione todos os documentos da coleçãofilmes em que o campo avaliacao do sub-documento ruim é diferente de 8.

--

```js
// Selecione todos os documentos da coleção filmes 
// em que o campo avaliacao do sub-documento ruim é diferente de 8.

db.filmes.find({ "avaliacao.ruim": { $ne: 8 } });
```

---

### Operador $in

> Para selecionar documentos em que o valor do campo possa ser qualquer um dos valores contidos em uma lista (array), utilizamos o operador $in.

--

### Operador $in

> Selecione os filmes correspondentes aos anos de 2001, 1968 e 1995.

--

### Operador $in

```js
// > Selecione os filmes correspondentes aos 
// anos de 2001, 1968 e 1995.

db.filmes.find({ ano: { $in: [2001, 1968, 1995] } }).pretty();
```

--

### Operador $nin (not in)

> Selecione os filmes que não correspondam aos anos 2013 e 2008

--

### Operador $nin (not in)

```js
// Selecione os filmes que não correspondam aos anos 2013 e 2008
db.filmes.find({ ano: { $nin: [2013, 2008] } });
```

---

# Operadores lógicos

> Os operadores lógicos auxiliam na criação de queries mais complexas em que os critérios precisam ser mais elaborados.

--

### Operador $and

> O **$and** recebe um array de operadores ou expressões e retorna os documentos quem satisfaçam a **todos** esses critérios.

--

### Operador $and

> Seleciona todos os documentos em que o valor do campo ano seja maior que 2000 e o campo bom de avaliação seja maior ou igual a 8

--

### Operador $and

```js
db.filmes.find({ $and: [{ ano: { $gt:2000 } }, { "avaliacao.bom": { $gte: 8 } }] });
```

---

### Operador $or

> Já o **$or** recebe um array de expressões e retorna todos os documentos que satisfaçam a **pelo menos um** desses critérios.

--

### Operador $or

> Seleciona todos os documentos em que o valor do campo ano seja maior que 2000 ou o campo bom de avaliação seja maior ou igual a 8

--

### Operador $or

```js
db.filmes.find({ $or: [{ ano: { $gt:2000 } }, { "avaliacao.bom": { $gte: 8 } }] });
```

---

### Operador de elementos: `$exists`

```js
// restaurando o banco
db.records.insertMany(
    [
        { primeiro: 5, segundo: 5, terceiro: null },
        { primeiro: 3, segundo: null, terceiro: 8 },
        { primeiro: null, segundo: 3, terceiro: 9 },
        { primeiro: 1, segundo: 2, terceiro: 3 },
        { primeiro: 2, terceiro: 5 },
        { primeiro: 3, segundo: 2 },
        { primeiro: 4 },
        { segundo: 2, terceiro: 4 },
        { segundo: 2 },
        { terceiro: 6 }
    ]
);
```

--

### Operador $exists

> Seleciona todos os documentos que contenham o campo primeiro, incluindo os documentos que em que o campo primeiro contém um valor null.

--

### Operador $exists

```js
// Seleciona todos os documentos que contenham o campo primeiro, 
// incluindo os documentos que em que o campo primeiro contém um valor null.

db.records.find({ primeiro: { $exists: true } });
```

--

### Operador $exists

> Seleciona todos os documentos que não contenham o campo segundo

--


```js
// Seleciona todos os documentos que não contenham o campo segundo
db.records.find({ segundo: { $exists: false } });
```

---

### Ordenando documentos

> Para ordenar documentos, utilizamos a função .sort()

--

### Ordenando documentos

```js
db.filmes.find().sort({ "avaliacao.bom": -1 });
db.filmes.find().sort({ "titulo": 1 });
db.filmes.find().sort({ "ano": -1 }, { "titulo": -1 });
```

---

### Utilizando operadores

> Todos os operadores que vimos até agora servem para criar queries não só de leitura, mas também de alteração (`updateOne` / `updateMany` e `deleteOne` / `deleteMany`).