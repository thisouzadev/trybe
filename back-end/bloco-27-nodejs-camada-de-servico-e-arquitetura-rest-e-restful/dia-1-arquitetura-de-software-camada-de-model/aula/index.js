const express = require('express');
// const characterModel = require('./models/SQL/characters.model');
const characterModel = require('./models/MONGO/characters.model');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/char', async (req, res) => {
    console.log('Entrou /char');

    const characters = await characterModel.findAll();

    return res.status(200).json(characters);
});

app.post('/char', async (req, res) => {
  try {
    console.log('Entrou /char POST')
    const { name, cartoon } = req.body;

    const newCharId = await characterModel.create(name, cartoon);

    const result = {
      id: newCharId,
      name,
      cartoon
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error('Internal Error: ', error.message);
    return res.status(500).json({ message: "Error"});
  }
});

app.delete('/char/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await characterModel.remove(id);

    return res.status(200).json({ message: "Success"});

  } catch (error) {
    console.error('Internal Error: ', error.message);
    return res.status(500).json({ message: "Error"});
  }
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));