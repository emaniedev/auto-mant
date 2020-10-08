const express = require('express');

const Document = require('../models/Document');


const DocumentRouter = express.Router();

DocumentRouter.get('/', async (req, res, next) => {
    try {
        console.log("Get -> Documents")
        const docu = await Document.find();
        res.json(docu);
    } catch (error) {
        next(error);
        console.log("cosa");
    }
})

//Recovers One
DocumentRouter.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const docu = await Document.findById(id);
        res.json(docu);
    } catch (error) {
        next(error);
        console.log("cosa");
    }
})

//Create One
DocumentRouter.post('/', async (req, res, next) => {
    try {
        const docu = new Document(req.body);
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
DocumentRouter.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const docu = await new Document({_id:id}).updateOne(req.body);
        res.json(docu);

    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
})

//Delete One
DocumentRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const auto = await new Document({ _id: id }).deleteOne();
        res.json(auto);
    } catch (error) {
        next(error);
    }
})

module.exports = DocumentRouter;