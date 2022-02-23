const mysql = require('mysql2/promise'); 

const connection = mysql.createPool({
  host: 'localhost',
  user: 'docker',
  password: '104668',
  database: 'live_lecture_31_1'
});

const getAll = async () => {
  const [cats] = await connection.execute('SELECT name, age FROM live_lecture_31_1.cats');
  return cats;
}

const add = async (name, age) => connection.execute(
  'INSERT INTO live_lecture_31_1.cats (name, age) VALUES (?,?)',
  [name, age],
);

const getCatById = async (id) => {
  const [cat] = await connection.execute(
    'SELECT name, age FROM live_lecture_31_1.cats WHERE id = ?',
    [id],
  );
  return cat;
}

module.exports = {
  getAll,
  add,
  getCatById
}