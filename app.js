const consign = require('consign');
const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const port = process.env.PORT || 4000

const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded())

app.set('views', './src/views');

consign()
  .include('src/routes')
  .then('src/models')
  .then('src/controllers')
  .into(app);

app.use(express.static(__dirname+'/public'))

app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`)
})
