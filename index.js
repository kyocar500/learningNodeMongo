'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/curso-mongo",{useNewUrlParser:true})
.then(()=>{
    console.log("La conexion a mongodb se realizo de manera exitosa");
    app.listen(port, () => {
        console.log("El servidor web se ha levantado correctamente en localhost:3800");
    });
})
.catch(err => console.log(err));


