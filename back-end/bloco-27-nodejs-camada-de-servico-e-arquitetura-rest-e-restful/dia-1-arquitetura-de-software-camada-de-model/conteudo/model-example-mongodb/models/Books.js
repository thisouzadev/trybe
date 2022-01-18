const connection = require('./connection');
const { ObjectId } = require('mongodb')
// Busca todos os livros do banco.
const getAll = async () => {
  const db = await connection();
  return db.collection('authors').find({}).toArray();
};

const findById = async (id) => {
  const db = await connection();
  const result = await db.collection('authors').findOne({ _id: ObjectId(id) })
  return result;
};

const create = async (firstName, middleName, lastName) => {
  const db = await connection();
  const result = await db.collection('authors').insertOne({ firstName, middleName, lastName, birthday, nationality })
  console.log(result);
  return result
};

module.exports = {
  getAll,
  findById,
  create,
};