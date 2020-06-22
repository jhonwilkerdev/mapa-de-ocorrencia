var fs = require('fs');

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