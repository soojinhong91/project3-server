const mongoose = require('mongoose');
const { Schema } = mongoose;

const BoardSchema = new Schema (
  {
    boardtype: {
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
  { collection: 'Board' }
);

module.exports = mongoose.model('Board', BoardSchema);
