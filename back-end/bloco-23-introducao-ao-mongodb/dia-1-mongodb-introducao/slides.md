---
theme: 'night'
transition: 'slide'
title:  'Manipulação e Criação de Imagens no Docker'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

## MongoDB - Introdução

---

### Recapitulando

- Não relacional
- NoSQL ❤️ SQL
- Focado em escalabilidade e performance
- Terminologia
  - **_Databases_** possuem **_Coleções_**
    - **_Coleções_** possuem **_Documentos_**
      - **_Documentos_** possuem **_Atributos_**

---

### Manipulando dados

--

### Insert

```js
// Insere um documento
db.inventory.insertOne({ item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" })

// Insere vários documentos
db.inventory.insertMany([
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
  { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);
```

--

### Find

```js
// Encontra todos os documentos de uma coleção
db.inventory.find({}); // ou
db.inventory.find();
```

--

### Filtrando documentos

```js
// Igualdade de campos: { <campo>: <valor> }
db.inventory.find({ status: "D" });

// Quando há mais de um campo, o `AND` é implícito
db.inventory.find({ status: "D", item: "paper" });
```

---

### Sub-documentos e relacionamentos

--

### Relacionamento 1:1

```js
// Documento do usuário
{
  _id: "joe",
  name: "Joe Bookreader"
}

// Documento do endereço
{
  user_id: "joe", // referencia o documento do usuário
  street: "123 Fake Street",
  city: "Faketon",
  state: "MA",
  zip: "12345"
}
```

--

### Relacionamento 1:1

```js
// Incorporados um ao outro
{
  _id: "joe",
  name: "Joe Bookreader",
  address: {
    street: "123 Fake Street",
    city: "Faketon",
    state: "MA",
    zip: "12345"
  }
}
```

Unindo os documentos, podemos buscá-los de uma vez só sem precisar procurar em duas collections diferentes

--

### Relacionamento 1:1

```js
db.users.insertOne({
  _id: "joe",
  name: "Joe Bookreader",
  address: {
    street: "123 Fake Street",
    city: "Faketon",
    state: "MA",
    zip: "12345"
  }
});
```

Também é possível inserir os documentos de uma só vez

--

### Relacionamento 1:N

```js
// Documento da usuária
{
  _id: "amanda",
  name: "Amanda Granger"
}

// Documento do endereço
{
  user_id: "amanda", // Referencia o documento da usuária
  street: "Sunset Boulevard",
  city: "Los Angeles",
  state: "CA",
  zip: "12345"
}

{
  user_id: "amanda",
  street: "1 Some Other Street",
  city: "New York",
  state: "NY",
  zip: "12345"
}
```

--

### Relacionamento 1:N

```js
{
  _id: "amanda",
  name: "Amanda Granger",
  addresses: [
    {
      street: "Sunset Boulevard",
      city: "Los Angeles",
      state: "CA",
      zip: "12345"
    },
    {
      street: "1 Some Other Street",
      city: "New York",
      state: "NY",
      zip: "12345"
    }
  ]
}
```

Utilizamos arrays para representar relacionamentos 1:N

--

### Relacionamento 1:N

```
db.users.insertOne({
  _id: "amanda",
  name: "Amanda Granger",
  addresses: [
    {
      street: "Sunset Boulevard",
      city: "Los Angeles",
      state: "CA",
      zip: "12345"
    },
    {
      street: "1 Some Other Street",
      city: "New York",
      state: "NY",
      zip: "12345"
    }
  ]
 }
);
```

Também podemos inserir diretamente os documentos relacionados

---

### Acessando dados em sub-documentos

```js
db.users.find({ "addresses.state": "NY" }).pretty();
```

---

### Projetando somente os campos desejados

```js
// Traz o campo _id
db.inventory.find({ status: "A" }, { item: 1, status: 1 });
db.inventory.find({ status: "A" }, { item: true, status: true });

// Remove o campo _id
db.inventory.find({ status: "A" }, { item: 1, status: 1, _id: 0 });
// ou
db.inventory.find({ status: "A" }, { item: 1, status: 1, _id: false });

// Escolhendo o que *não* trazer
db.inventory.find({ status: "A" }, { status: 0, instock: 0 });
```

---

### Métodos de cursor `limit` e `skip`

--

### Limit

```js
db.inventory.find().limit(2);
db.inventory.find({ status: "A" }).limit(1);
```

--

### Skip

```js
db.inventory.find().skip(2);
```

--

### Limit + Skip

```js
db.inventory.find({}, { item: 1 }); // retorna todos os cinco documentos
db.inventory.find({}, { item: 1 }).skip(0).limit(2); // retorna o primeiro e segundo documentos
db.inventory.find({}, { item: 1 }).skip(1*2).limit(2); // retorna o terceiro e quarto documentos
db.inventory.find({}, { item: 1 }).skip(2*2).limit(2); // retorna o último elemento
db.inventory.find({}, { item: 1 }).skip(3*2).limit(2); // retorna nada
```