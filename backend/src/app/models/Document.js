const mongoose = require('mongoose');
const validation = require('./validation');

const documentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: validation.requiredString,
    alias: String,
    image: validation.requiredString,
    description: String,
    obtention_date: validation.requiredDate,
    efective_date_from: validation.requiredDate,
    efective_date_to: Date
}, {

    timestamps: true,
})

const Document = mongoose.model('Document', documentSchema);

module.exports = Auto;