Primeiramente vamos precisar executar pelo CLI a criação de um novo seed:
npx sequelize seed:generate --name users

Para executar o seed, basta rodarmos o comando:
npx sequelize db:seed:all

E para reverter:
npx sequelize db:seed:undo:all
