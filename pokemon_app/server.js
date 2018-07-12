const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const Pokemon = require('./models/pokemon.js');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));


const port = 3000;



const pokemonController = require('./controllers/pokemonController');

app.use('/pokemon', pokemonController);


//setup the server to listen to port 3000
app.listen(port, () => {
	console.log('Server is listening on port 3000.');
});



