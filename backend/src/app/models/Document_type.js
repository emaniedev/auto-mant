const mongoose = require('mongoose');
const validation = require('./validation');

const document_typeSchema = new mongoose.Schema({
    name: validation.requiredString,
    alias: String,
    image: String,
    description: String,
}, {

    timestamps: true,
})

const Document_type = mongoose.model('Document_type', document_typeSchema);

module.exports = Document_type;