const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Está vivo!!!')
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Escutando na porta ${port}`);


const arr = [1,2,3]
const saveNumber = async(n) => {
  await db.save(n);
}
const promises = arr.map(async (n) => {
  await saveNumber(n);
})

const result = await Promise.allSettled(promises)
console.log(result);