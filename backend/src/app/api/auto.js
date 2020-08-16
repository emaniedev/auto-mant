const { json } = require('express');
const express = require('express');

const Auto = require('../models/Auto.js');


const AutoRouter = express.Router();

AutoRouter.get('/', async (req,res, next) => {
    try {
        const autos = await Auto.find();
        res.json(autos);
    } catch (error) {
        next(error);
        console.log("cosa");
    }
})

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

module.exports = AutoRouter;