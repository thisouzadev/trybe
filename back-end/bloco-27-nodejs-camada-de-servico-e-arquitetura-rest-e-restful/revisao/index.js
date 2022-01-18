const express = require('express');
const errorMiddleware = require('./middlewares/errorHandler');

const router = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);
app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
