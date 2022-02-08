npm install sequelize

O primeiro passo para utilizar o sequelize é instalar um CLI que é responsável por gerar e executar as operações. Além de instalar o CLI, precisamos instalar também o mysql2 , uma dependência necessária para usarmos o MySQL juntamente com o sequelize.
npm install sequelize-cli
npm install mysql2

Inicializar o Sequelize
Depois que instalamos o CLI, precisamos iniciar um projeto com sequelize. Para isso, vamos executar o seguinte comando dentro da pasta raiz:
npx sequelize-cli init

Criando o banco usando o CLI do Sequelize
npx sequelize db:create

gerar um model
npx sequelize model:generate --name User --attributes fullName:string

Com a migration criada, basta executarmos pelo CLI: // email
npx sequelize db:migrate

Caso queira reverter uma migration:
npx sequelize db:migrate:undo

Se você quiser criar uma outra migration para adicionar a coluna phone na sua tabela Users , você pode criar um novo arquivo com o comando:
npx sequelize migration:generate --name add-column-phone-table-users
