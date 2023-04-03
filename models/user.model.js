const mongoose = require('mongoose');

//Schema definition
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
        trim: true
      },
    });


//Model creation
const User = mongoose.model('User', userSchema)
module.exports = User