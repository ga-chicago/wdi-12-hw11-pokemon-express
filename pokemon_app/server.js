const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const pokemonController = require('./controllers/pokeControllers')

app.use('/pokemon', pokemonController)

app.listen(3000, () => {
  console.log('listening on port', port)
});








