const mongoose = require('mongoose');
const { Schema } = mongoose;

const GearSchema = new Schema (
  {
    geartype: {
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
  { collection: 'Gear' }
);

module.exports = mongoose.model('Gear', GearSchema);
