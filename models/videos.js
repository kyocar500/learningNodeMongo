'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VideoSchema = Schema({
    titulo: String,
    description: String,
    anio: Number,
    visitas: Number,
    comentarios : [ 
        {
            user : String,
            texto : String
        }
    ],
    keywords : [
        {
            texto:String
        }
    ]
});

module.exports = mongoose.model('Video',VideoSchema);