const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    id: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    city:{
      type: String,
      default:''
    },
    age:{
        type: Number
    }

});
const User = new mongoose.model('User', userSchema);
module.exports = User;