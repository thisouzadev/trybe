/* eslint-disable no-throw-literal */
const Joi = require('joi');
const { create } = require('../models/cars.models');
const { badRequest } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorHandling');

const carSchema = Joi.object({
  marca: Joi.string().min(4).required(),
  modelo: Joi.string().required(),
  ano: Joi.number().min(2010).max(2022).required(),
  cor: Joi.string().required(),
  placa: Joi.string().required(),
});

const createCar = async (marca, modelo, ano, cor, placa) => {
  const { error } = carSchema.validate({
    marca, modelo, ano, cor, placa,
  });

  if (error) throw errorConstructor(badRequest, error.message, 'Invalid_Data');

  const id = await create(marca, modelo, ano, cor, placa);

  return { id, marca, modelo };
};

module.exports = {
  createCar,
};
