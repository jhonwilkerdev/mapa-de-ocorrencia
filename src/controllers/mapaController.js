const faker = require('faker')

module.exports.index = function(application, req, res) {
  var crimes = new application.src.models.crimes();
  crimes.getCrimes(function(err, result) {
    res.render("pages/home", {crimes : result});
  });
}
module.exports.cadastro = function(application, req, res) {
  var ocorrencias = new application.src.models.ocorrencias();
  ocorrencias.getOcorrencias(function(err, result) {
    res.render("pages/cadastro-ocorrencia", {ocorrencias : result});
  });
}

module.exports.mapa = function(application, req, res) {
  var ocorrencias = new application.src.models.ocorrencias();
  ocorrencias.getOcorrencias(function(err, result) {
    res.render("mapas/mapa", {ocorrencias : result});
  });
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




/* app.get('/about', (req, res) => {
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
})

app.get('/contact', (req, res) => {
  res.render('pages/contact')
})

app.post('/contact', (req, res) => {
  res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
}) */