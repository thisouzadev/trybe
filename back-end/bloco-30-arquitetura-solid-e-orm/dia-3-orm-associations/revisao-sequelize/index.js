require('dotenv').config()
const express = require('express');

const PublisherController = require('./controllers/publisherController');
const TagController = require('./controllers/tagController');
const GameController = require('./controllers/gameController');

const app = express();

app.use(express.json());

app.use('/publishers', PublisherController);
app.use('/tags', TagController);
app.use('/games', GameController);

app.get('/', (_req, res) => res.send('OK'))

app.listen(3000, () => {
  console.log('Running on 3000');
});