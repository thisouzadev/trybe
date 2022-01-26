const express = require('express')
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Books = require('./models/Books');

const app = express()
const port = 3000

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { firstName, middleName, lastName, birthday, nationality } = req.body;

  if (!Books.isValid(firstName, middleName, lastName, birthday, nationality)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Books.create(firstName, middleName, lastName, birthday, nationality);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Books.findById(id);

  if (!books) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(books);
});
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))