const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'aula_27_1'
});

module.exports = connection;