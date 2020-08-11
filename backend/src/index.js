const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const AutoRouter = require('./api/auto.js');
const middlewares = require('./middlewares');
const mongoose  = require('mongoose');


const result = require('dotenv').config();
console.log(result);

const app = express();
console.log("el puerto es ");
console.log("la url de la bd es : " + process.env.DATABASE_URL);

mongoose.connect("mongodb://localhost:27017/auto-mant",{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
//Midlewares
app.use(morgan('common'));
app.use(helmet());
app.use(express.json());

//Routing
app.use('api/autos', AutoRouter);




//Error Handling
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


const port = process.env.SERVER_PORT || 1337

app.listen(port, () => {
    console.log("Escuchando en: https://localhost:" + port);   
})





