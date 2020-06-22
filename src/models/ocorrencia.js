'use-strict';
var fs = require('fs');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
      type: String,
      required:false
    },
    description: {
      type: String,
      require:true
    },
    color:{
      type:String,
      require:true
    },
    coordinates:[{
      type: Number,
      require:true
    }],
    tags:[{
      type:String,
      require:true
    }]
});

module.exports = mongoose.model('Ocorrencia',schema);

function ocorrencia() {}

ocorrencia.prototype.getOcorrencias = function(callback) {
  fs.readFile('./data/ocorrencias.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      var obj = JSON.parse(result);
      obj.features.forEach(function(feature) {       
        data.push(feature);
      });
    }	  
    callback(err, data);
  });
};

ocorrencia.prototype.getTipoOcorrencia = function(callback) {
  fs.readFile('./data/tipos-de-ocorrencia.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      var obj = JSON.parse(result);
      obj.tipoDeOcorrencia.forEach(function(feature) {       
        data.push(feature);
      });
    }	  
    callback(err, data);
  });
};

module.exports = function(){
  return ocorrencia;
};