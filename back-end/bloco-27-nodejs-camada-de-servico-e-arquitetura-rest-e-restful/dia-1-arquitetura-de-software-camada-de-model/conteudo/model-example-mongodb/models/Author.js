const connection = require('./connection');
const { ObjectId } = require('mongodb')
const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => {
  const db = await connection();
  const result = await db.collection('authors').insertOne({ firstName, middleName, lastName })
  console.log(result);
  return result
}
// Cria uma string com o nome completo do autor
const getFullNameAuthor = (first_name, middle_name, last_name) => {

  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [first_name, middle_name, last_name]
    .filter(Boolean)
    .join(' ');

  return fullName;
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

// Busca todos os autores do banco.
const getAll = async () => {
  // const variav = connection()
  //     .then((db) => db.collection('authors').find().toArray())
  //         .then((authors) =>
  //             authors.map(({ _id, firstName, middleName, lastName }) =>
  //             getNewAuthor({
  //                 id: _id,
  //                 firstName,
  //                 middleName,
  //                 lastName,
  //             })
  //         )
  //     );
  //     console.log(variav);
  //     return variav
  const db = await connection();

  return db.collection('authors').find({}).toArray();
}

// Busca um autor específico, a partir do seu ID
const findById = async (id) => {
  const db = await connection();
  const result = await db.collection('authors').findOne({ _id: ObjectId(id) })
  return result;
};

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};