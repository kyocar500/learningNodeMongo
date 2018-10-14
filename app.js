'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas

// body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configurar cors

// configurar rutas
app.get('/', (request,response) => {
    response.status('200').send({
        message : "Welcome"
    });
});

app.get('/pruebas-api', (request,response) => {
    response.status('200').send({
        message : "Esta es una respuesta de prueba del api",
        message2 : "Salida secundaria"
    });
});


module.exports = app;