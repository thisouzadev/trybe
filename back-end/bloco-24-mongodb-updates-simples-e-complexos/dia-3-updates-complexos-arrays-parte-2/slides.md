---
theme: 'night'
transition: 'slide'
title:  '24.3 - Updates complexos Arrays - parte II'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

### 24.3 - Updates complexos Arrays O retorno

![](https://cdn-images.rtp.pt/EPG/imagens/33300_41112_31796.jpg?amp;w=270)

--

### 24.3 - Updates complexos Arrays O retorno

- Operadores que podem ser utilizados tanto em updates quanto em finds, alguns **específicos para arrays** e outros para qualquer tipo de campo.
- Buscas textuais com `$regex` e `$text`.

---

### Operador `$all`

> Quando você tem um array de **strings** o operador **`$all`** pode ser utilizado para simplificar a query, fazendo com que o código fique mais limpo do que uma operação utilizando o `$and`. **Os dois operadores produzem o mesmo efeito no resultado.**

--

### Operador `$all`

> Vamos utilizar um banco de dados com alguns dados de voos aéreos

--

### Operador `$all`

> Buscaremos primeiros voos da companhia Azul

```js
db.voos.find(
    { "empresa.nome": "AZUL" },
    { vooId: 1 }
);
```

--

### Operador `$all`

> Vamos criar um campo chamado referências e inserir algumas palavras para identificar cada um desses voos

--

### Operador `$all`

```js
db.voos.updateOne(
    { vooId: 744454 },
    {
        $push: {
            referencias: {
                $each: ["campinas", "fort lauderdale", "internacional", "regular", "pontual"]
            }
        }
    }
);
```

--

### Operador `$all`

```js
db.voos.updateOne(
  { vooId: 744455 },
  {
    $push: {
      referencias: {
        $each: ["belo horizonte", "orlando", "internacional", "regular", "pontual"]
      }
    }
  }
);
```

--

### Operador `$all`

> Vamos buscar todos os voos que contenham os termos `regular` e `internacional` no array `refeferencia`

--

### Operador `$all`

```js
db.voos.find(
  {
    referencias: {
      $all: [ "regular", "internacional" ]
    }
  },
  {
    vooId: 1,
    referencias: 1
  }
);
```
--

### Operador `$all`

- Os documentos dos voos com os campos referencias iguais a **regular** e **internacional** foram retornados.
- Ele retorna todos os elementos do Array.
- O operador `$all` também não leva em consideração a ordem.
- Lembrem-se que, como ele faz um AND, **todos os elementos passados** devem estar no array para satisfazer a query.

--

### Operador `$all`

```js
// somente 1 voo possui os 3 parametros
db.voos.find(
    {
        referencias: {
            $all: [ "regular", "internacional", "campinas" ]
        }
    },
    {
        vooId: 1,
        referencias: 1
    }
);
```

--

### Operador `$all`

```js
// nenhum documento corresponde a essa busca
db.voos.find(
    {
        referencias: {
            $all: [ "regular", "internacional", "campinas", "Trybe" ]
        }
    },
    {
        vooId: 1,
        referencias: 1
    }
);
```

---

### Operador `$elemMatch`

> O operador $elemMatch ajuda muito na construção de queries em arrays que necessitem de múltiplas condições e retorna os documentos em que o array contenha pelo menos um dos elementos passados como parâmetro de filtro.

--

### Operador `$elemMatch`

> Vamos testar na coleção de estudantes da última aulas para

--

### Operador `$elemMatch`

```js
db.students.find(
  {
    quizzes: {
        $elemMatch: { wk: { $gte: 5, $lte: 7 } }
    }
  },
  {
    name: 1,
    quizzes: 1
  }
);
```

--

### Operador `$elemMatch`

```js
db.students.find(
  {
    scores: {
        $elemMatch: { $gte: 10, $lte: 11  }
    }
  },
  {
    name: 1,
    scores: 1
  }
);
```

---

### Operador `$size`

> O $size é um operador simples que filtra os arrays que tem exatamente o número de elementos especificado.

--

### Operador `$size`

> Ele não aceita ranges de valores como os que são executados pelos operadores $gt ou $lt, por exemplo. Ao invés disso, ele necessita de um valor único.

--

### Operador `$size`

```js
db.students.find(
  {
    quizzes: { $size: 3 }
  },
  {
    name: 1,
    quizzes: 1,
    turma: 1
  }
);
```

--

### Operador `$expr` (antigo $where)

> O operador `$expr` pode ser utilizado no find para comparar valores entre campos da mesma coleção. Vamos ver como fazer isso através de um exemplo.

--

### Operador `$expr`

> Imaginem que queremos encontrar os voos em que tomamos prejuízo? Poderíamos fazer isso procurando por voos que tem mais passageiros grátis do que passageiros pagos:

--

### Operador `$expr`

```js
db.voos.find(
  {
    $expr: {
      $lt: [ "passageiros.gratis", "passageiros.pagos"]
    }
  },
  { passageiros: 1 }
);
```

--

### Operador `$expr`

> Voos em que a carga Paga em 'Kg' foi menor que a carga grátis

--

### Operador `$expr`

```js
db.voos.find(
  {
    $expr: {
      $lt: [ "carga.paga.kg", "carga.gratis.kg"]
    }
  },
  { carga: 1 }
);

```

---

### Operador `$regex`

> O operador $regex oferece a possibilidade de filtrar documentos utilizando expressões regulares. 

--

### Operador `$regex`

> Você pode criar expressões muito elaboradas através desse operador, mas para ficar claro e simplificar sua utilização, esse operador funciona também de maneira semelhante ao `LIKE` do SQL.

--

### Operador `$regex`

```js
db.voos.find(
  {
    name: {
      $regex: /^Al.*$/i
      // ^  indica que o nome começa com 'Al'
      // E depois podem vir qualquer caracter
      // Isso é indicado pelo .* e $
    }
  }
);
```

--

### Operador `$regex`

> Procurar por estudantes que contenham em algum ponto de seu nome a letra A

--

### Operador `$regex`

```js
db.students.find(
  {
    name: {
      $regex: /A/i
    }
  }
);

db.students.count(
  {
    name: {
      $regex: /A/i
    }
  }
);
```

---

### Operador `$text`

> O operador `$text` eleva o poder das buscas textuais à um nível mais alto. Para utilizá-lo é necessário a criação de um **índice** do tipo text para o campo desejado, e cada coleção pode conter apenas um desses índices, que podem conter um ou mais campos (índice composto).

--

### Operador `$text`

> Os parâmetros aceitos pelo $text são:

--

### Operador `$text`

- `$search`: Uma string com os termos que o MongoDB utilizará para fazer o parse e utilizará como filtro. Internamente o MongoDB faz uma busca lógica (OR), a menos que seja especificado como uma frase inteira;

--

### Operador `$text`

- `$language`: Opcional. Esse campo determina a lista de stop words que será utilizada na tokenização da busca. Veja a lista de idiomas suportados. Se você passar o valor none, a busca utilizará uma tokenização simples sem utilizar nenhuma lista de stop words;

--

### Operador `$text`

- `$caseSensitive`: Opcional. Recebe um valor booleano para habilitar ou desabilitar buscas case sensitive. O valor default é false, o que faz com que as buscas sejam case-insensitive.

--

### Operador `$text`

- `$diacriticSensitive`: Opcional. Recebe um valor booleano para habilitar ou desabilitar busca diacritic sensitive. O valor default também é false. (a !== á)

--

### Operador `$text`

> Vamos importar a coleção `articles` de dentro de dataset.js

--

### Operador `$text`

```js
db.articles.createIndex({ subject: "text" })
// Esse índice permitirá utilizarmos a busca textual.
```

--

### Operador `$text`

> Vamos procurar especificamente a palavra coffee nos documentos:

--

### Operador `$text`

```js
db.articles.find({ $text: { $search: "coffee" } })
```

--

### Operador `$text`

> Note que a query é um pouco diferente, pois não especificamos o campo onde o MongoDB tem que realizar a busca. Isso é definido pelo índice que criamos, ou seja, ele sabe que tem que fazer a busca pela palavra coffee no campo subject.

--

#### Operador `$text` - Procurando por mais de uma palavra

> Para pesquisar por mais de uma palavra, basta passarmos como string separadas por espaço.

--

### Operador `$text`

```js
// Todos os documentos que contenham bake, coffee OU cake:
db.articles.find({ $text: { $search: "bake coffee cake" } })
```

--

### Operador `$text` - Procurando por uma frase

```js
db.articles.find({ $text: { $search: "\"coffee shop\"" } })
```

--

### Operador `$text` - Utilizando idioma

> A utilização de um idioma específico, determina a lista de stop words. O MongoDB possui uma lista para cada idioma suportado.

--

### Operador `$text`

> Vamos utilizar a collection de músicas em nosso arquivo dataset.js

--

### Operador `$text`

> Vamos criar um índice do tipo text no campo letra:

--

### Operador `$text`

```js
db.musica.createIndex({ letra: "text" }, { default_language: "portuguese" })
```

--

### Operador `$text` - Utilizando `Stemming`

```js
db.musica.find({ $text: { $search: "tomando um café" } })
```

--

### Operador `$text`

> Note que aqui o Stemming está sendo usado muito claramente. O documento contém a frase "tomar um cafezinho", mas mesmo trocando o verbo para tomando, o MongoDB consegue identificar a raiz da palavra e efetuar a busca!

--

### THE END