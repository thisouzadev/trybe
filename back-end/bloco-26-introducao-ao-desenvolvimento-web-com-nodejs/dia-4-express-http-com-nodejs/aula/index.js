const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const logMiddleware = (req, res, next) => {
  const { method } = request;
  console.log(method);

  next(); 
}

const errorMiddlewar = (err, _req, res, _next) => {
  return res.status(500).json({message: `Algo deu ruim: ${err}`});
}

const tokenValidate = (request, response, next) => {
  // console.log(request.headers);
  console.log(request.method);
  const { token, senhadousuar, batatinha } = request.headers;

  // FALAR SOBRE RETURN
  if(!token) next('ERRO');

  next();

}

const middlewareFinal = (req, res, next) => {
  return res.status(200).json({message: "Bem vindo"});
}

// middleware (req, res, next) => {} 
app.get('/', tokenValidate, middlewareFinal);

app.get('/minharota', (req, res, _next) => {
  const a = 10;
  const b = 50;
  const total = a + b;

  return res.status(200).send(`${total}`);
});

app.post('/login', (req, res, next) => {
  const { email, senha } = req.body;

  if(email !== 'Thiago' || senha !== 'abc') next('VOCE NAO TEM AUTORIZAÇÃO'); 

  return res.status(200).json({message: `Boas vindas: ${email}`});
});


app.use(errorMiddlewar);
app.listen(PORT, () => console.log(`O PAI TA ON NA PORTA!!!!!!!!! ${PORT}`));

// validar o token -> validar o login -> gerar um novo token -> responder a pessoa