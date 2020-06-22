const faker = require('faker')

module.exports.index = function(application, req, res) {
  var ocorrencia = new application.src.models.ocorrencia();
  ocorrencia.getOcorrencias(function(err, result) {
    res.render("pages/home", {ocorrencias : result});
  });
}

module.exports.getOcorrencia = function(application, req, res) {
  var ocorrencia = new application.src.models.ocorrencia();
  ocorrencia.getTipoOcorrencia(function(err, result) {
    res.render("pages/cadastro-ocorrencia", {tipoDeOcorrencia : result});
  });
}

module.exports.postOcorrencia = function(application, req, res) {
  res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
  console.log(req);
  /* 
  var ocorrencia = new application.src.models.ocorrencia();
  ocorrencia.getTipoOcorrencia(function(err, result) {
    res.render("pages/cadastro-ocorrencia", {tipoDeOcorrencia : result});
  }); */
}

module.exports.about = function(application, req, res) {
  //application.get('/about', (req, res) => {
    var users = [{
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/300/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/400/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/500/300'
    }]
  
    res.render('pages/about', {
        usuarios: users
    })
  //})
}

module.exports.getContact = function(application, req, res) {
  
    res.render('pages/contact')
  
}

module.exports.postContact = function(application, req, res) {
    res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
}