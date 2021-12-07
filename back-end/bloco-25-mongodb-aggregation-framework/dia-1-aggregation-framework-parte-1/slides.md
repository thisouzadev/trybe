---
theme: 'night'
transition: 'slide'
title:  '25.1 Aggregation Framework - Parte I'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

### 25.1 Aggregation Framework - Parte I

--

### 25.1 Aggregation Framework - Parte I

- Aggregation Pipeline;
- Operações de agrupamento, filtro e projeção.

---

### Aggregation Framework

> Operações de agregação processam dados e retornam resultados computados, calculados. Elas podem agrupar valores de múltiplos documentos, ou até mesmo coleções, colocando tudo junto, executando operações para devolver um resultado único.

--

### Aggregation Framework

> No MongoDB temos três tipos de operações de agregação:

--

### Aggregation Framework

- **Aggregation Pipeline**: é uma espécie de "funil", divididos em estágios, recomendado pelo MongoDB pela sua eficiência e performance.

--

### Aggregation Framework

- **Map-reduce**: utiliza funções `JavaScript` customizadas para executar as operações `map` e `reduce`. Por utilizar JavaScript ele tem grande flexibilidade se comparado ao `Aggregation Pipeline`, porém, é menos eficiente e mais complexo.

--

### Aggregation Framework

- **Single Purpose Aggregation Operations**: são operações que quando executadas diretamente na coleção, fazem agregações muito simples, por exemplo um `count()` ou um `distinct()`.

---

### Aggregation Pipeline

> Escrito em `C++` (como o próprio MongoDB), o Aggregation Pipeline fornece grande eficiência e performance, bem como uma grande variedade de funções para executar não apenas operações de agregação como operações de transformações nos documentos.

--

### Aggregation Pipeline

> O input inicial para o aggregation pipeline é sempre uma coleção. Cada estágio produz um output para o estágio seguinte até que o pipeline termine e tenhamos o resultado. Também podemos ter vários estágios com o mesmo operador, por exemplo, dois ou mais agrupamentos, dois ou mais filtros. Isso vai mesmo da nossa necessidade na hora da montagem.

--

### Aggregation Pipeline

> O resultado pode ser um único documento, vários documentos (cursor) ou até mesmo uma coleção.

--

### Aggregation Pipeline

- Combinem à vontade os estágios (também podemos ter vários estágios com o mesmo operador);
- Os estágios serão executados na sequência da montagem;
- Eles não são executados em paralelo;
- Como resultado pode-se ter: um documento, um conjunto de documentos, ou uma coleção.

---

### Deu `$match`?

> O estágio responsável por filtrar os documentos durante o pipeline. É possível utilizar os operadores da mesma forma que foi utilizado no método find() para selecionar documentos.

--

### Deu `$match`?

> A grande dica é: **sempre** procure utilizar o $match o mais "cedo" possível no pipeline. Isso ajuda muito na performance em geral porque dessa forma, índices podem ser utilizados e também pode haver uma redução significativa no número de documentos enviados ao próximo estágio.

--

### Vamos dar `$match`?

```js
//sintaxe
db.voos.aggregate([
    { $match: { "atributo": "valor" } }
]);
```

--

> Encontre todos os voos da empresa American Airlines

--

### Vamos dar `$match`?

```js
db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } }
]);
```

--

### Vamos dar `$match`?

- Não utilizamos mais o método `find()` e sim `aggregate`;
- Seu parâmetro é um Array;
- Esse Array é nossa pipeline;
- Cada elemento desse array é um estágio.

--

### Vamos dar `$match`?

> E se quisermos trazer apenas os documentos da empresa "AMERICAN AIRLINES" que tiveram mais de 85 decolagens?

--

### Vamos dar `$match`?

```js
db.voos.aggregate([
  { 
    $match: {
      "empresa.nome": "AMERICAN AIRLINES",
      decolagens: { $gt: 85 }
    },
  },
]);

// utilizamos a vírgula como operador and
```

--

### Vamos dar `$match`?

> Que tal vermos agora dimensão da redução causada pelo `$match` para entendermos melhor o quanto ele ajuda em performance quando feito o mais cedo possível?

--

### Vamos dar `$match`?

> Bora contar a quantidade de voos da American Airlines, uma forma de implementar, seria utilizando o operador $count em um estágio da pipeline.

--

### Vamos `$count`ar os `$match`s?

```js
db.voos.aggregate([
  { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
  { $count: "totalDeVoos" }
]);
```

--

### E se a`$GROUP`armos os `$match`s?

> Com o `$group` você acumula valores por uma string ou um campo específico da coleção. É através desse estágio que podemos aplicar a maioria dos operadores aritméticos como médias, encontrar valores máximos e mínimos e muito mais (veremos log log).

--

### E se a`$GROUP`armos os `$match`s?

```js
db.voos.aggregate([
  { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
  {
    $group: {
      _id: null,
      count: { $sum: 1 }
    }
  }
]);
```

--

### E se a`$GROUP`armos os `$match`s?

- Veja que passamos **null** como valor para o `_id`, isso diz que ele **não utilizará** nenhum campo como acumulador.

--

### E se a`$GROUP`armos os `$match`s?

- No campo seguinte, que chamamos de count, utilizamos o $sum com o valor 1. Isso quer dizer que pra cada documento encontrado ele somará 1 no campo `count`.

---

### Acumuladores

![](https://www.jornalnovaepoca.com/uploads/images/2019/08/2209-1565957032.jpg)

--

### Acumuladores

>  Queremos saber a quantidade de decolagens de cada empresa.

--

### Acumuladores

```js
db.voos.aggregate([
  {
    $group : {
      _id : "$empresa.nome",
      total: {
        $sum: "$decolagens"
      }
    }
  }
]);
```

---

### "Having"

> O equivalente a um HAVING do SQL é adicionar um `$match` depois de um `$group`, por exemplo para saber todas as vendas de empresas que tenham mais de 900 e menos de 1000(mil) decolagens

--

### "Having"

```js
db.voos.aggregate([
  {
    $group : {
      _id : "$empresa.nome",
      total: {
        $sum: "$decolagens"
      }
    }
  },
  { $match: { total: { $gt: 900 , $lt: 1000} } }
]);
```

---

### Filtrando por mais de um atributo

> E se eu precisar agrupar os documentos por mais de um atributo? Como eu faço?

--

### Filtrando por mais de um atributo

> Vamos supor que eu queira agrupar as companhias aéreas, e agrupar quanto voos de um país de origem X até o país de destino Y existem naquela companhia. Ex: Brasil x EUA, Chile x Holanda ...

--

### Filtrando por mais de um atributo

```js
db.voos.aggregate([
  {
    $group: {
      _id: {
        "nomeDaEmpresa": "$empresa.nome",
        "paisDeOrigem": "$aeroportoOrigem.pais",
        "paisDeDestino": "$aeroportoDestino.pais",
      },
      qtde: { $sum: 1 }
    }
  }
  ]);
```

--

### Onda após onda

> Mas cada companhia aérea, junto com os países de origem e destino estão agrupados, mas não estão juntos. Gostaria de agrupar todas as combinações origem x destino embaixo do nome da companhia aérea.

--

### Onda após onda

```js
db.voos.aggregate([
  { /* ... estágio anterior ... */ }
  {
    $group: {
      _id: "$_id.nomeDaEmpresa",
      voos: {
        $push: {
          "paisDeOrigem": "$_id.paisDeOrigem",
          "paisDeDestino": "$_id.paisDeDestino",
          "quantidadeDeVoos": "$qtde"
          
        }
      }
    }
  }
]);
```

--

### Onda após onda - Entendendo

- O primeiro agrupamento foi o visto no exemplo anterior;
- O segundo agrupamento pega os dados do primeiro agrupamento (ou seja, do estágio anterior) e reagrupa: pegando o nome da companhia aérea como o objeto agregador, criando um array dentro de cada resultado e, nesse array adiciona a combinação de origem x destino. Além de colocar a quantidade de voos que ocorreram entre aqueles 2 países.

---

### Distinct

> Podemos utilizar o $group para saber os valores únicos de um determinado campo, para isso é só passar o campo como valor do _id

--

### Distinct

> Com isso podemos, por exemplo, ver quais são as empresas que tem voos registrados na nossa coleção.

--

### Distinct

```js
db.voos.aggregate([
    { $group : { _id : "$empresa.nome" } }
]);
```

---

### Eu quero `$order`

> E que tal exibir os resultados em ordem alfabética?

--

### Eu quero `$order`

```js
db.voos.aggregate([
    { $group : { _id : "$empresa.nome" } },
    { $sort: { "_id": 1 } }
]);
```

--

### Eu quero `$order`

```js
  { /* estágio 1 */ },
  { /* estágio 2 */ },
  {
    $sort: { "_id": 1 }
  }
]);
```

---

### Precisamos ter `$limit`!

```js
db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
    { $limit: 3 }
]);
```

--

### Precisamos ter `$order` e `$limit`!

> Encontrar os três voos dda American Airlines com o maior número de decolagem.

--

### Precisamos ter `$order` e `$limit`!

```js
db.voos.aggregate([
    { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
    { $sort: { decolagens: -1 } },
    { $limit: 3 }
]).pretty();
```

--

### Precisamos ter `$limit`!

```js
  { /* estágio 1 */ },
  { /* estágio 2 */ },
  { /* estágio 3 */ },
  { $limit: 3 }
]);
```

---

### Já chegamos no `$project`?

> Assim como no find(), o $project seleciona quais os documentos devem ser retornados pelo estágio. Funciona exatamente igual, utilizando 1 para exibir e 0 para suprimir.

--

### Já chegamos no `$project`?

> Porém esse estágio possui mais funcionalidades como, por exemplo, mudar o nome de campos.

--

> Vamos supor que eu queira mostrar todos os voos da empresa "AMERICAN AIRLINES" com todas as combinações possíveis de voos entre o país de origem X e o país de destino Y.

--

### Já chegamos no `$project`?

```js
db.voos.aggregate([
  { $match: { "empresa.nome": "AMERICAN AIRLINES" } },
  {
    $project: {
      _id: 0,
      nomeDaEmpresa: "$empresa.nome",
      paisDeOrigem: "$aeroportoOrigem.pais",
      paisDeDestino: "$aeroportoDestino.pais",
    }
  }
]);

// mais para frente veremos seu funcionamento junto do $group
```

---

### Operador $unwind

> O estágio `$unwind` é essencial quando se fala em operações de agregação que contenham arrays. Esse estágio "expande" os elementos do array, criando um documento de saída para cada elemento do array, preservando os outros campos do documento.

--

### Operador $unwind

```js
// vamos testar nessa collection
db.products.insertOne({
    "_id" : 1,
    "item" : "ABC1",
    sizes: [ "S", "M", "L"]
})
```

--

### Operador $unwind

> Na coleção products temos um documento que contém um array de strings chamado sizes

--

### Operador $unwind

> Quando executamos o estágio `$unwind`, três documentos são retornados porque o array contém três elementos:

```js
db.products.aggregate([{ $unwind : "$sizes" }]);
```

--

### Operador $unwind

> Também podemos realizar o `$match` após realizado o `$unwind`

```js
db.products.aggregate([
  { $unwind : "$sizes" },
  {
    $match: {
        sizes: "S"
    }
  }
]);
```

---

### Vamos dar um `$lookup`

> O `$lookup` é a única maneira de executar **joins** no MongoDB. Lembre-se sempre de que o **MongoDB é um banco de dados não relacional** por isso relacionar coleções é uma operação bastante custosa e até limitadora para ele. Mas como em alguns casos essa junção pode ser inevitável, a partir da versão 3.2 o `$lookup` foi introduzido no MongoDB para suprir essa necessidade.

--

### Vamos dar um `$lookup`

```js
// collection orders
db.orders.insertMany(
    [
        { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
        { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },
        { "_id" : 3  }
    ]
);
```

--

### Vamos dar um `$lookup`

```js
// collection invenroty
db.inventory.insertMany(
    [
       { "_id" : 1, "sku" : "almonds", "description": "product 1", "instock" : 120 },
        { "_id" : 2, "sku" : "bread", "description": "product 2", "instock" : 80 },
        { "_id" : 3, "sku" : "cashews", "description": "product 3", "instock" : 60 },
        { "_id" : 4, "sku" : "pecans", "description": "product 4", "instock" : 70 },
        { "_id" : 5, "sku": null, "description": "Incomplete" },
        { "_id" : 6 }
    ]
);
```

--

### Vamos dar um `$lookup`

> Digamos que temos duas coleções em nosso banco de dados, onde uma contém as vendas de produtos (orders) e a outra contém o cadastro desses produtos com suas informações mais completas (inventory).

--

### Vamos dar um `$lookup`

> Para saber as vendas e informações completas dos produtos e retornar tudo num único documento, podemos fazer um $lookup cruzando as duas coleções utilizando como campo "em comum" o item da coleção orders e o sku da coleção inventory:

--

### Vamos dar um `$lookup`

```js
db.orders.aggregate([
   {
     $lookup:
       {
         from: "inventory",
         localField: "item",
         foreignField: "sku",
         as: "inventory_docs"
       }
  }
]);
```

--

### Vamos dar um `$lookup`

> Para executar um lookup, abrimos um estágio no pipeline e indicamos quatro parâmetros básicos e obrigatórios:

--

### Vamos dar um `$lookup`

- A coleção a ser "juntada" no parâmetro from;
- O campo da coleção local (onde a operação de agregação está sendo executada) que será comparado com o campo da coleção "juntada" no parâmetro localField;
- O campo da coleção "juntada" no parâmetro foreingField;
- E o nome do campo que será adicionado ao retorno dos documentos no parâmetro as, esse campo sempre será um array.

--

### Vamos dar um `$lookup`

> O resultado é a combinação de todos os campos da coleção orders com mais um campo novo inventory_docs com as informações dos produtos. Mas note o resultado do terceiro documento. Nele temos dois produtos, um com o campo sku null e outro que nem sequer tem o campo sku. Isso acontece porque dessa maneira, (default), o MongoDB faz o equivalente ao LEFT JOIN do SQL.

---

### NPX QUARTOU