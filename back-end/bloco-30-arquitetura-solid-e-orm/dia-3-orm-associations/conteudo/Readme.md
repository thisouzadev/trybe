npm init -y
npm i express nodemon sequelize mysql2
npm i sequelize-cli
npx sequelize-cli init

npx sequelize db:create

<!-- migration -->

npx sequelize migration:generate --name create-employees
npx sequelize db:migrate

 <!-- seed -->

npx sequelize seed:generate --name employees
npx sequelize db:seed:all
npm i mocha chai sinon chai-http -D

"scripts": {
  ...
  "test": "NODE_ENV=test mocha ./tests/**/*$NAME*.test.js --exit"
},