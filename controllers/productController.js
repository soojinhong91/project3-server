const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.list_all_products = (req, res) => {
  // const newProduct = new Product({
  //   category: "boards"
  // });
  // newProduct.save()
  Product.find({}, (err, products) => {
    if (err) res.send(err);
    res.json(products);
  });
};

exports.create_a_product = (req, res) => {
  const newProduct = new Product({
    category: "boards"
  });
  newProduct.save((err, product) => {
    if (err) res.send(err);
    res.json(product);
  })
}

exports.read_a_product = (req, res) => {
  Product.findById(req.params.productId, (err, product) => {
    if (err) res.send(err);
    res.json(product);
  })
}

exports.update_a_product = (req, res) => {
  Product.findOneAndUpdate(
    { _id: req.params.productId },
    req.body, // params
    { new: true },
    (err, product) => {
      if (err) res.send(err);
      res.json(product);
    }
  )
}

exports.delete_a_product = (req, res) => {
  Product.deleteOne({ _id: req.params.productId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'Product successfully deleted',
      _id: req.params.productId
    });
  })
};
