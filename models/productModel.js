const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema (
  {
    category: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  },
  { collection: 'Product' }
);

module.exports = mongoose.model('Product', ProductSchema);
