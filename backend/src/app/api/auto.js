const express = require('express');

const Auto = require('../models/Auto.js');


const AutoRouter = express.Router();

//Recovers All
AutoRouter.get('/', async (req,res, next) => {
    try {
        const autos = await Auto.find();
        res.json(autos);
    } catch (error) {
        next(error);
        console.log("cosa");
    }
})

//Recovers One
AutoRouter.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params; 
        const autos = await Auto.findById(id);
        res.json(autos);
    } catch (error) {
        next(error);
        console.log("cosa");
    }
})

//Create One
AutoRouter.post('/', async (req, res, next) => {
    try {
        const auto = new Auto(req.body);
        const created = await auto.save();
        res.json(created);
        
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
})

//Update One
AutoRouter.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const auto = await new Auto({_id:id}).updateOne(req.body)
        // const autos = await Auto.updateOne({ id },auto);
        res.json(auto);
    } catch (error) {
        next(error);
        console.log("cosa");
    }
})

//Delete One
AutoRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const auto = await new Auto({ _id: id }).deleteOne();
        res.json(auto);
    } catch (error) {
        next(error);
        console.log("cosa");
    }
})

module.exports = AutoRouter;