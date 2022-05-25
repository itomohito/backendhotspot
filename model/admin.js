const mongoose = require('mongoose');

const Schema = mongoose.Schema

const adminSchema = new Schema({
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
const Admin = new mongoose.model('Admin', adminSchema);
module.exports = Admin;