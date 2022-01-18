const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const productsController = require('./controllers/productController');

const app = express();
const port = 3000;

app.use(express.json());

// rotas
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/products', productsController.getAllProducts);

app.post('/products', productsController.createProduct);

app.get('/products/:id', productsController.getProductId);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
