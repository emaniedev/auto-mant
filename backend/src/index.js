#!/usr/bin/env node

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');


const middlewares = require('./middlewares');
const mongoose  = require('mongoose');


const result = require('dotenv').config();

const app = express();
console.log("el puerto es: " + process.env.SERVER_PORT);
console.log("la url de la bd es : " + process.env.DATABASE_URL);

// // File watchers - Hot not Reload!
// const directory = '/app';
// const chokidar = require('chokidar')
// const watcher = chokidar.watch(directory
// console.log('Chokidar armed in: ' + directory)
// watcher.on('ready', function () {
//     console.log('Ready event!');
//     console.log("Escudriñando directorios: ");
//     console.log(watcher.getWatched())
//     watcher.on('all', function (event, path) {
//         console.log("Recibido evento: " + event);
//         console.log("En path: " + path);
//         console.log("Clearing /app/ module cache from server")
//         Object.keys(require.cache).forEach(function (id) {
//             if (/[\/\\]app[\/\\]/.test(id)) delete require.cache[id]
//         })
//     })
// })


mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(v => console.log('Conectado!!!!'))
    .catch((error) => console.error(error))
    
//Midlewares
app.use(morgan('common'));
app.use(helmet());
app.use(express.json());
app.use(cors())

const AutoRouter = require('./app/api/auto');
const DocumentRouter = require('./app/api/document')
const Document_typeRouter = require('./app/api/document_type')
//Routing
app.use('/api/autos', AutoRouter);
app.use('/api/documents', DocumentRouter);
app.use('/api/documentstypes', Document_typeRouter);




//Error Handling
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


const port = process.env.SERVER_PORT || 1337

app.listen(port, () => {
    console.log("Escuchando en: http://localhost:" + port);   
})



