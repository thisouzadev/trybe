/* eslint-disable no-unused-vars */
const productService = require('../services/productService');

const getAllProducts = async (req, res, _next) => {
  const allProducts = await productService.getAll();

  return res.status(200).json(allProducts);
};

const createProduct = async (req, res, next) => {
  try {
    const { sku, name, price } = req.body;

    const newProduct = await productService.create(sku, name, price);

    return res.status(200).json(newProduct);
  } catch (err) {
    console.log(err.message);
    return next(err);
  }
};

const getProductId = async (req, res, next) => {
  const { id } = req.params;
  const product = await productService.getProduct(id);

  return res.status(200).json(product);
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductId,
};
