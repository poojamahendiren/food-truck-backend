const mongoose = require('mongoose');

//Schema definition
const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        trim: true
      },
      quantity: {
        type: Number,
        required: true,
        trim: true
      },
      price: {
        type: Number,
        required: true,
        trim: true
      },
    });


//Model creation
module.exports = mongoose.model('Item', itemSchema);