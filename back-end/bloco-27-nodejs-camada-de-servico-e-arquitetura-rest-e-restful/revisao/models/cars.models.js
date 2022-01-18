const connect = require('./connection');

const create = async (marca, modelo, ano, cor, placa) => {
  const conn = await connect();
  const { insertedId } = await conn.collection('cars').insertOne({
    marca, modelo, ano, cor, placa,
  });
  return { id: insertedId };
};

module.exports = {
  create,
};

// "marca", "modelo", "ano", "cor", "placa",