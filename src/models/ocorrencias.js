var fs = require('fs');

function ocorrencias() {}

ocorrencias.prototype.getOcorrencias = function(callback) {
  fs.readFile('./data/ocorrencias.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      var obj = JSON.parse(result);
      obj.ocorrencias.forEach(function(feature) {       
        data.push(feature);
      });
    }	  
    callback(err, data);
  });
};

module.exports = function(){
  return ocorrencias;
};