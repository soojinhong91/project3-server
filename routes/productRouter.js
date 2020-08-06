const productBuilder = require("../controllers/productController");
const Product = require("../models/productModel");

module.exports = (app) => {
  app
  .route('/products')
  .get(productBuilder.list_all_products)
  .post(productBuilder.create_a_product)

  app
  .route('/products/:productId')
  .get(productBuilder.read_a_product)
  .put(productBuilder.update_a_product)
  .delete(productBuilder.delete_a_product)
}
