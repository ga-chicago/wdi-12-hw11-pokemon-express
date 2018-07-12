const express = require('express');

const router = express.Router();


const Pokemon = require('../models/pokemon')

// router.get('', (req, res) => {
// 	res.send('Welcome to the Pokemon App!');
// });

router.get('/', (req, res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	});
});

router.get('/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id]
	});
});


module.exports = router;