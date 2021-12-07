---
theme: 'night'
transition: 'slide'
title:  '25.2 Aggregation Framework - Parte II'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

### 25.2 Aggregation Framework - Parte II

---

### Antes de iniciarmos ...
![wait](https://media.giphy.com/media/eeL8EcBBTwSMLACw6F/giphy.gif)

--

### Alinhamentos

![Alinhamentos](https://media.giphy.com/media/l1Et7pUJDUqPQXZPG/giphy.gif)


--

### Alinhamentos

> Novo repositório de aula ao vivo

https://github.com/tryber/sd-013-c-live-lectures

--

### Alinhamentos

- Início
- Meio
- !Fim

--

### Alinhamentos

- Último dia de aula de banco de dados
- Quem está atrasado é hora de correr atrás
- Precisamos chegar em node para forcarmos no conteúdo
- Próximos blocos serão focados na construção de API's
- Daqui a 4/5 blocos o nível é outro

---

### 25.2 Aggregation Framework - Parte II

--

### 25.2 Aggregation Framework - Parte II

- Aggregation Pipeline;
- Expressões aritméticas e estágios de projeção.

--

### Lembrar nunca é demais

- combinem à vontade os estágios (também podemos ter vários estágios com o mesmo operador);
- os estágios serão executados na sequência da montagem;
- eles não são executados em paralelo;
- como resultado pode-se ter: um documento, um conjunto de documentos, ou uma coleção.

---

### Condições no JOIN: `$lookup` com `let` e pipeline

> Para que você especifique mais de um campo para comparação entre duas coleções, é necessário adicionar mais dois parâmetros ao $lookup.

--

### Condições no JOIN: `$lookup` com `let` e pipeline

- O **`let`** especifica quais campos da coleção de origem (onde o aggregate está sendo executado) serão utilizados na comparação, passando esses campos como variáveis para o pipeline interno do $lookup.

--

### Condições no JOIN: `$lookup` com `let` e pipeline

> Vamos fazer algumas alterações na coleção `orders` e adicionar outra coleção chamada `warehouses`. Essa nova coleção contém a quantidade em estoque de cada produto com o seu respectivo `sku` aqui representado pelo campo `stock_item`.

--

### Condições no JOIN: `$lookup` com `let` e pipeline

```js
//vamos dropar a coleção
db.orders.drop();

db.orders.insertMany(
  [
    { "_id" : 1, "item" : "almonds", "price" : 12, "ordered" : 2 },
    { "_id" : 2, "item" : "pecans", "price" : 20, "ordered" : 1 },
    { "_id" : 3, "item" : "cookies", "price" : 10, "ordered" : 60 }
  ]
);

db.warehouses.insertMany(
  [
    { "_id" : 1, "stock_item" : "almonds", warehouse: "A", "instock" : 120 },
    { "_id" : 2, "stock_item" : "pecans", warehouse: "A", "instock" : 80 },
    { "_id" : 3, "stock_item" : "almonds", warehouse: "B", "instock" : 60 },
    { "_id" : 4, "stock_item" : "cookies", warehouse: "B", "instock" : 40 },
    { "_id" : 5, "stock_item" : "cookies", warehouse: "A", "instock" : 80 }
]);
```

--

### Condições no JOIN: `$lookup` com `let` e pipeline

> Digamos que você quer saber se tem produtos suficientes em estoque para suprir todas as suas vendas, ao invés de fazer vários `finds` no banco de dados, você usa um `$lookup` mais incrementado para isso.

--

### Condições no JOIN: `$lookup` com `let` e pipeline

> Vamos fazer a operação de agregação na coleção `orders` e trabalharemos com os campos `item` e `ordered` dessa coleção passando isso no `let`. Depois compararemos esses dois campos com os campos `stock_item` e `instock` da coleção `warehouses`.

--

### Condições no JOIN: `$lookup` com `let` e pipeline


```js
db.orders.aggregate([
  {
    $lookup: {
      from: "warehouses",
      let: { order_item: "$item", order_qty: "$ordered" },
      pipeline: [
        { $match:
            { $expr:
              { $and: [
                  { $eq: [ "$stock_item",  "$$order_item" ] },
                  { $gte: [ "$instock", "$$order_qty" ] }
                ]
              }
            }
        },
        { $project: { stock_item: 0, _id: 0 } }
      ],
      as: "stockdata"
    }
  }
]);
```

---

### Só `$add` com depo

> Mal conheço mas já considero pakas

--

### Operador `$add`

> Conforme o conteúdo visto, a expressão $add é utilizada para somar valores numéricos ou acrescentar valores em campos do tipo date. Essa expressão é bem intuitiva, basicamente recebe dois ou mais valores e a saída é a soma deles.

--

### Populando a coleção

> Vamos utilizar a coleção packages

--

### Operador `$add`

> Agora vamos utilizar o estágio `$project` numa agregação para projetar os campos `package` e um novo campo chamado `total`, que vai somar os valores dos campos dentro do objeto `prices`

--

### Operador `$add`

```js
db.packages.aggregate([
  {
    $project: {
      package: 1,
      total: {
        $add: ["$prices.package_price", "$prices.package_fee", "$prices.flight_price"]
      }
    }
  }
]);
```

--

### Complemento

> É possível utilizar mais de dois valores em outras funções aritméticas?

--

### Complemento

- Multiply (sim)
- Subtract (não) aceita apenas dois argumentos
- Divide (não) -> aceita apenas dois argumentos

--

### Operador `$add`

> Se quisermos adiar os pacotes de viagem Guaraparis e Caldas Novas em 2 meses basta converter 60 dias em milissegundos e adicionar ao valores dos campos dentro do objeto dates que contém o inicio e o fim do pacote de viagem

--

### Operador `$add`

```js
db.packages.aggregate([
  {
    $project: {
      package: 1,
        checkin_date: {
          $add: ["$dates.start_date", 60 * 24 * 60 * 60 * 1000]
        },
        checkout_date : {
          $add: ["$dates.end_date", 60 * 24 * 60 * 60 * 1000]
      }
    }
  }
]);
```

---

### Operador `$addFields`

> Funciona né? Mas tivemos que realizar uma operação por vez, podemos fazer tudo em uma tacada só

--

### Operador `$addFields`

```js
db.packages.aggregate([
    {
        $addFields: {
            milissegundos: 60 * 24 * 60 * 60 * 1000
        }
    },
    {
        $project: {
            package: 1,
            checkin_date: {
                $add: ["$dates.start_date", "$milissegundos"]
            },
            checkout_date: {
                $add: ["$dates.end_date", "$milissegundos"]
            }
        }
    }
]);
```

--

### Operador `$addFields`

> Ficou melhor não é? Mas e se eu quiser adicionar uma variável?

--

### Operador `$addFields`

```js
const milissegundos = 60 * 24 * 60 * 60 * 1000;

db.packages.aggregate([
  {
    $project: {
      package: 1,
      checkin_date: {
        $add: ["$dates.start_date", milissegundos]
      },
      checkout_date: {
        $add: ["$dates.end_date", milissegundos]
      }
    }
  }
]);
```

---

### Operador `$Subtract`

> Para a expressão $subtract apenas temos que observar que sempre o segundo argumento é o que será utilizado para subtrair do primeiro.

--

### Operador `$Subtract`

```js
const milissegundos = 60 * 24 * 60 * 60 * 1000;

db.packages.aggregate([
  {
    $addFields: {
      subtracted_start_date: {
        $subtract: ["$dates.start_date", milissegundos]
      },
      subtracted_end_date: {
        $subtract: ["$dates.end_date", milissegundos]
      }
    }
  },
  {
      $project: {
        pacote: 1,
        "dates.start_date": 1,
        subtracted_start_date: 1,
        "dates.end_date": 1,
        subtracted_end_date: 1
      }
  }
]);
```

---

### Operadores `$multiply`, `$ceil` e `$floor`

> Temos dois operadores para fazer arredondamentos no pipeline.

--

### Operadores `$multiply`, `$ceil` e `$floor`

> O `$ceil` arredonda um número para cima, enquanto o `$floor` arredonda para baixo, sempre retornando valores inteiros.

--

### Operadores `$multiply`, `$ceil` e `$floor`

> Digamos que você queira um campo que contenha o valor total e outro que contenha o valor após aplicar uma taxa de 5.32 de conversão para dolar.

--

### Operadores `$multiply`, `$ceil` e `$floor`

```js
// Primeiro vamos adicionar esses campos ao pipeline:
db.packages.aggregate([
  {
    $addFields: {
      totalPacote: {
        $add: [ "$prices.package_price", "$prices.package_fee", "$prices.flight_price"]
      },
      totalDolar: {
        $multiply: ["$totalPacote", 5.50]
      }
    }
  }
]);
```

--

### Operadores `$multiply`, `$ceil` e `$floor`

> Observem que o valor de `totalDolar` veio nulo. Esse erro aconteceu, pois o valor do campo `$totalDolar` depende do valor do campo `$totalPacote`. Por conta dessa dependência vamos ter que criar dois estágios `$addFields` ao invés de apenas um

--

### Operadores `$multiply`, `$ceil` e `$floor`

```js
db.packages.aggregate([
  {
    $addFields: {
      totalPacote: {
        $add: [ "$prices.package_price", "$prices.package_fee", "$prices.flight_price"]
      }
  }
  },
  {
    $addFields: {
      totalDolar: {
        $multiply: ["$totalPacote", 5.32]
      }
      }
  }
]);
```

--

### Operadores `$multiply`, `$ceil` e `$floor`

> Por fim, vamos adicionar o valor final em dollar arredondado para cima

--

### Operadores `$multiply`, `$ceil` e `$floor`

```js
  [...],
  {
    $project: {
      package: 1,
      totalVenda: 1,
      totalDolarOriginal: "$totalDolar",
      totalDolarParaCima: {
        $ceil: ["$totalDolar"]
      },
      totalDolarParaBaixo: {
        $floor: ["$totalDolar"]
      }
    }
  }
```

---

### Operador `$divide`

> Utilizando a expressão $divide podemos dividir dois valores, onde o primeiro argumento é o dividendo e o segundo é o divisor.

--

### Operador `$divide`

> Podemos calcular o percentual com os valores que criamos na agregação anterior, dividindo o total da venda pelo valor original após a conversão para saber o seu percentual:

--

### Operador `$divide`

```js
db.packages.aggregate([
  {
    $addFields: {
      totalPacote: {
        $add: ["$prices.package_price", "$prices.package_fee", "$prices.flight_price"]
      }
    }
  },
  {
    $addFields: {
      totalDolar: {
        $multiply: ["$totalPacote", 5.32]
      }
    }
  },
  {
    $project: {
      package: 1,
      totalPacote: 1,
      totalDolar: 1,
      percentualTaxa: {
        $divide: ["$totalDolar", "$totalPacote"]
        // o primeiro argumento é o dividendo e o segundo é o divisor
      }
    }
  }
]);
```

---

### Operador $abs

[](https://www.webmotors.com.br/wp-content/uploads/2020/12/22121349/2.-Freio-ABS-scaled.jpg)

--

### Operador $abs

> Utilizando a expressão $abs podemos encontrar o valor absoluto de um número. O que é muito útil para encontrar a diferença entre dois valores.

--

### Operador $abs

```js
db.packages.aggregate([
  {
    $addFields: {
      totalPacote: {
        $add: ["$prices.package_price", "$prices.package_fee", "$prices.flight_price"]
      }
    }
  },
  {
    $addFields: {
      totalDolar: {
        $multiply: ["$totalPacote", 5.32]
      }
    }
  },
  {
    $project: {
      package: 1,
      totalPacote: 1,
      totalDolar: 1,
      diferencaAbsoluta: {
          $abs: { $subtract: ["$totalPacote", "$totalDolar"] }
      }
    }
  }
])
```