const { createCar } = require('../services/cars.services');
const { success } = require('../utils/dictionary/statusCode');

const carCreate = async (req, res, next) => {
  try {
    const {
      marca, modelo, ano, cor, placa,
    } = req.body;

    const newCar = await createCar(marca, modelo, ano, cor, placa);

    return res.status(success).json(newCar);
  } catch (error) {
    console.log(`POST CREATECAR -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  carCreate,
};
