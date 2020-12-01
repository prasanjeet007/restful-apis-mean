const mongoose = require('mongoose');
const validator = require('validator');
const registerSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        validate(value) {
          if (!validator.isEmail(value)) {
              throw new Error('Invalid Email Format')
          }
        },
        required: true,
    },
    phone: {
        type: Number,
        unique: true,
        minlength: 10,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    cpass: {
        type: String,
        required: true,
    }
});

const RegisterModel = new mongoose.model('Register', registerSchema);
module.exports = RegisterModel;