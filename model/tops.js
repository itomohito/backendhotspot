const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topSchema = new Schema({
    id: {
        type: String,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

});
const Tops = new mongoose.model('Tops', topSchema);
module.exports = Tops;