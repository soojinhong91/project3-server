const mongoose = require('mongoose');
const { Schema } = mongoose;

const BeachSchema = new Schema (
  {
    beachitem: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    price: {
      type: String,
      required: false
    }
  },
  { collection: 'Beach' }
);

module.exports = mongoose.model('Beach', BeachSchema);
