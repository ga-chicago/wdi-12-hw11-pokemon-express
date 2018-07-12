const express = require('express')

const router = express.Router()

const Pokemon = require('../models/pokemon')



// INDEX
router.get('/', (req, res) => {
  res.render('index.ejs', {
    pokemon: Pokemon
  })
})

// CREATE
router.post('/', (req, res) => {
  Pokemon.push(req.body)
  res.redirect('/pokemon')
});

// NEW 
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// EDIT
router.get('/:id/edit', (req, res) => {
  res.render('edit.ejs', {
    pokemon: Pokemon[req.params.id], 
    index: req.params.id
  })
})

// UPDATE
router.put('/:id', (req, res) => {
  Pokemon[req.params.id] = req.body
  res.redirect('/pokemon')
})

// SHOW
router.get('/:id', (req, res) => {
  res.render('show.ejs', {
    pokemon: Pokemon[req.params.id]
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  Pokemon.splice(req.params.id, 1)
  res.redirect('/pokemon')
})



module.exports = router;




