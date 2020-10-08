const express = require('express');

const Document_type = require('../models/Document_type');

const Document_typeRouter = express.Router()

Document_typeRouter.get('/', async (req, res, next) => {
    try {
        console.log("Get -> Document_type")
        const docu = await Document_type.find();
        res.json(docu);
    } catch (error) {
        next(error);
        console.log("cosa");
    }
})

//Recovers One
Document_typeRouter.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const docu = await Document_type.findById(id);
        res.json(docu);
    } catch (error) {
        next(error);
    }
})

//Create One
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

//Update One
Document_typeRouter.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const docu = await new Document_type({ _id: id }).updateOne(req.body);
        res.json(docu);

    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
})

//Delete One
Document_typeRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const auto = await new Document_type({ _id: id }).deleteOne();
        res.json(auto);
    } catch (error) {
        next(error);
    }
})

module.exports = Document_typeRouter;