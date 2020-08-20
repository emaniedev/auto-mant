const express = require('express');


const createCrudRouter = (Model) => {
    const CrudRouter = express.Router();

    CrudRouter.get('/', async (req, res, next) => {
        console.log(Model);
        try {
            const entity = await Model.find();
            res.json(entity);
        } catch (error) {
            next(error);
            console.log("cosa");
        }
    })

    CrudRouter.post('/', async (req, res, next) => {
        try {
            console.log(Model);
            const entity = new Model(req.body);
            const created = await entity.save();
            res.json(created);
        } catch (error) {
            if (error.name === 'ValidationError') {
                res.status(422);
            }
            next(error);
        }
    })
    return CrudRouter
}

module.exports = { createCrudRouter }

