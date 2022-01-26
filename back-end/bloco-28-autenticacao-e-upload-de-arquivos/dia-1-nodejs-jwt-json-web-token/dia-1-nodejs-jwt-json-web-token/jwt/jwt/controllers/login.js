const jwt = require('jsonwebtoken');
const service = require('../services/User');
const { JWT_SECRET } = process.env;
const { validateCredentials } = require('./utils/validateCredentials');

const validateBody = (body) =>
  /* Utilizamos o Joi para validar o schema do body */
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

module.exports = async (req, res, next) => {
  const { error } = validateCredentials(req.body);
  /* Caso ocorra erro na validação do Joi, passamos esse */
  /* erro para o express, que chamará nosso middleware de erro */
  if (error) return next(error);
  const { username, password } = req.body;
  /* Pedimos para o service gerar o token */
  const { error: serviceError, token } = await service.login(username, password);
  /* Caso ocorra um erro do tipo `invalidCredentials`,
   retornamos um novo erro com status `401 unauthorized` */
  if (serviceError && serviceError.code === 'invalidCredentials') {
    return next({ statusCode: 401, message: serviceError.message });
  }

  /* Caso haja qualquer outro erro, acionamos o middleware de erro para obter uma mensagem genérica */
  if (serviceError) {
    return next(serviceError);
  }

  /* Por fim, caso nenhum erro tenha ocorrido, retornamos o token */
  res.status(200).json({ token });
  /* Se o login for admin e a senha estiver incorreta */
  if (req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') {
    /* Criamos um novo objeto de erro */
    const err = new Error('Invalid username or password');
    /* Adicionamos o status `401 Unauthorized` ao erro */
    err.statusCode = 401;
    /* Passmos o erro para o express, para que seja tratado pelo middleware de erro */
    return next(err);
  }

  /* Definimos admin como true se username e password estiverem corretos */
  const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';


  const payload = {
    username: req.body.username,
    /* Passamos a utilizar o valor da variável `admin` */
    /* para determinar o valor do campo `admin` no payload do token */
    admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).json({ token });
};