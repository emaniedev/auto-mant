const mongoose = require('mongoose');
const validation = require('./validation');
const Document_auto = require('./Document');

const autoSchema = new mongoose.Schema({
    plate_number: {
        type: String,
        required: true
    },
    alias: validation.requiredString,
    brand: String,
    model: String,
    description: String,
    obtention_date: validation.requiredDate,
    last_revison: Date,
    next_revision: Date,
    documents: [ typeof Document_auto]
},{    
    timestamps: true,
})

const Auto = mongoose.model('Auto', autoSchema);

module.exports = Auto;