const express = require('express');
const app = express();

const Pokemon = require('./models/pokemon.js')

const port = 3000;


//setup the server to listen to port 3000
app.listen(port, () => {
	console.log('Server is listening on port 3000.');
})

app.get('/', (req, res) => {
	res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	});
});

