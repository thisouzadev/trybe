const express = require('express');
const { carCreate } = require('../controllers/cars.controllers');

const router = express.Router();

// router.get('/cars', () => console.log('FUNCIONA'));

router.post('/cars', carCreate);

module.exports = router;
