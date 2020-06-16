var fs = require('fs');

function crimes() {}

crimes.prototype.getCrimes = function(callback) {
  fs.readFile('./data/crimes.json', 'utf8', function(err, result) {
  
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

module.exports = function(){
  return crimes;
};

