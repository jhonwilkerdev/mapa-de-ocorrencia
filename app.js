'use-strict';

const consign = require('consign');
const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const port = process.env.PORT || 4000


const app = express();
//mongoose.connect('mongodb+srv://root:3cia123@cluster0-bcj1a.azure.mongodb.net/test');
mongoose.connect('mongodb://localhost:27017');

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
    console.log(`Server on: http://localhost:${port}`)
})
var a;