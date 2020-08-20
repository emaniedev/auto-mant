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

module.exports = DocumentRouter;