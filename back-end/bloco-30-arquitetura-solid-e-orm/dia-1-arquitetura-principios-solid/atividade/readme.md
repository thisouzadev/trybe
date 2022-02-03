Crie um arquivo separado para as funções, um plants.js (elas virarão nossos controllers).
Remova as interações com localStorage e manipule apenas a variável defaultPlants .
Precisamos ter os endpoints:
GET /plants : retorna todas as plantas;
GET /plant/:id : retorna uma planta com o id;
DELETE /plant/:id : deleta uma planta com o id;
POST /plant/:id : sobrescreve a planta com id;
POST /plant : cria uma planta nova;
GET /sunny/:id : retorna uma planta que precisa de sol com o id.

npm init -y
npm install express body-parser