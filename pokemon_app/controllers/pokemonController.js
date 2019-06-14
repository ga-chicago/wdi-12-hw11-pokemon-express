const express = require('express');

const router = express.Router();


const Pokemon = require('../models/pokemon')

// router.get('', (req, res) => {
// 	res.send('Welcome to the Pokemon App!');
// });
//INDEX ROUTE
router.get('/', (req, res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	});
});


//CREATE ROUTE
router.post('/', (req, res) => {

	Pokemon.push(req.body)

	res.redirect('/pokemon/');
});


//NEW ROUTE 
router.get('/new', (req, res) => {
	res.render('new.ejs');
});


//EDIT ROUTE 
router.get('/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.id],
		index: req.params.id
	});

});


//PUT ROUTE
router.put('/:id', (req, res) => {

	Pokemon[req.params.id] = req.body;

	res.redirect('/pokemon/');
});

//DELETE ROUTE
router.delete('/:id', (req, res) => {
	Pokemon.splice(req.params.id, 1);
	res.redirect('/pokemon/');
});


//SHOW ROUTE
router.get('/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id]
	});
});


module.exports = router;