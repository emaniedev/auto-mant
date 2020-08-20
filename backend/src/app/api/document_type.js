const express = require('express');

const Document_type = require('../models/Document_type');

const Document_typeRouter = express.Router()

Document_typeRouter.get('/', async (req, res, next) => {
    try {
        console.log('Get -> Documents types')
        const docu = await Document_type.find();
        res.json(docu);
    } catch (error) {
        next(error);
        console.log("cosa");
    }
})

Document_typeRouter.post('/', async (req, res, next) => {
    try {
        const docu = new Document_type(req.body);
        const created = await docu.save();
        res.json(created);

    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
})


module.exports = Document_typeRouter;