const express = require('express');

const Auto = require('../models/Auto.js');


const AutoRouter = express.Router();

AutoRouter.get('/', async (req,res, next) => {
    try {
        const autos = await Auto.find();
        res.json(autos);
    } catch (error) {
        next(error);
    }
})

AutoRouter.post('/', async (req, res, next) => {
    try {
        console.log(req.body); 
        const auto = new Auto(req.body);

        const created = auto.save();
        res.json(created);
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(422);
          }
          next(error);
      
    }
})

module.exports = AutoRouter;