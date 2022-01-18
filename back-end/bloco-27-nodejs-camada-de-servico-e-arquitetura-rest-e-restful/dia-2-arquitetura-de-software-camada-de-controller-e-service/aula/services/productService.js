/* eslint-disable no-throw-literal */
const productsModel = require('../model/productModel');

const getAll = async () => {
  const allProducts = await productsModel.getAllProducts();

  return allProducts;
};

const ERROR_400 = 400;

const create = async (sku, name, price) => {
  if (!name || !sku || !price) throw { status: ERROR_400, message: 'All fields required' };

  const productExists = await productsModel.getProductBySKU(sku);

  if (productExists) throw { status: ERROR_400, message: 'Product already exists' };

  const newProductId = await productsModel.create(sku, name, price);

  return {
    id: newProductId,
    sku,
    name,
    price,
  };
};

const getProduct = async (id) => {
  console.log(id);
  const product = await productsModel.getProduct(id);

  return product;
};

module.exports = {
  getAll,
  create,
  getProduct,
};
