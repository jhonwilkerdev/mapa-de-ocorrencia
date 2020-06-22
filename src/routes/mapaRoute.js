module.exports = function(application){

  application.get('/', function(req, res){
      application.src.controllers.mapaController.index(application, req, res);
  });

  application.get('/about', function(req, res){
    application.src.controllers.mapaController.about(application, req, res);
  });

  application.get('/contact', function(req, res){
    application.src.controllers.mapaController.getContact(application, req, res);
  });

  application.post('/contact', function(req, res){
    application.src.controllers.mapaController.postContact(application, req, res);
  });

  application.get('/cadastro-ocorrencia', function(req, res){
    application.src.controllers.mapaController.getOcorrencia(application, req, res);
  });

  application.post('/cadastro-ocorrencia', function(req, res){
    application.src.controllers.mapaController.postOcorrencia(application, req, res);
  });
  
}