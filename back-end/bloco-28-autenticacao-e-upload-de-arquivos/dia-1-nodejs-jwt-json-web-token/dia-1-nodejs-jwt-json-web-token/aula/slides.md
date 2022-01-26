---
theme: "night"
transition: "slide"
title: "Node.js"
enableMenu: false
enableSearch: false
enableChalkboard: false
---

### JWT - JSON WEB TOKEN

![JWT](https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png){width=60%}

---

### O que teremos hoje?

- Segurança 💚
- JWT

---

### Como um sistema funciona?

![-](./images/01-error.png)

---



### Faço o login

![-](./images/02-login.png)

---

### Crio com sucesso

![-](./images/03-sucess.png)

---

#### Mas como a API sabe que estou logado?

![-](./images/04-pergunta.png)

---

#### Uma das formas é com JWT - (JSON Web Token)

![-](./images/jwt-icon.png)

---

# Cafeteria ☕️

---

![-](./images/cafe/01-cafe-pedido.png)

---

![-](./images/cafe/02-cafe-nome.png)

---

![-](./images/cafe/03-cafe-nome-resposta.png)

---

![-](./images/cafe/04-cafe-nota.png)

---

![-](./images/cafe/05-cafe-demorar.png)

---

![-](./images/cafe/06-cafe-pronto.png)

---

![-](./images/cafe/07-cafe-pronto.png)

---

![-](./images/cafe/08-cafe-nota.png)

---

![-](./images/cafe/09-cafe-entrega.png)

---

### Quando eu faço o login

![-](./images/05-login_jwt.png)

---

### Quando eu faço o login

![-](./images/cafe/10-token.png)

---

### Em todas as requisições

![-](./images/06-sucesso_jwt.png)

---

### O que tem dentro desse token?

![-](https://media2.giphy.com/media/xGdvlOVSWaDvi/giphy.gif?cid=ecf05e479efdefdf07iy972xec233tak6tgq0datjx0amau4&rid=giphy.gif&ct=g)

---

### Estrutura de um token

![-](./images/07-token.png)

---

### Estrutura de um token

![-](./images/08-toke_detalhes.png)

---

### Base 64?

![-](./images/base-64.png)

---

### Header - Base 64

![-](./images/09-header.png)

---

### Payload - Base 64

![-](./images/10-payload.png)

---

### Signature - Hash criptografica

![-](./images/11-signature.png)

---

### Como funciona esse tal de HMAC

![-](./images/12-hash_function.png)

---

### Não importa quantas vezes

![-](./images/13-hash_vezes.png)

---

#### Diferente do base 64 auqi não tem volta

![-](./images/14-hash_explicacao.png)

---

![-](./images/15-como_validamos.png){width=80%}

---

![-](./images/16-token_enviado.png)

---

![-](./images/17-token_hash.png)

---

![-](./images/19-saida_signature.png)

---

### E se alguém tentar adicionar uma permissão no token?

- Vai mudar o Payload
- A assinatura vai bater?

---

![-](./images/20-token_alterado.png)

---

### Dúvidas?

![alt](https://media3.giphy.com/media/3o6MbudLhIoFwrkTQY/giphy.gif?cid=790b76117789c6161150915091725a365bdeac4e06fd01cd&rid=giphy.gif&ct=g){ width=90% }