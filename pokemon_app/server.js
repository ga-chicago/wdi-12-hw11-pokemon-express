const express = require('express');
const app = express();
const port = 3000

const Pokemon = require('./models/pokemon')

app.listen(3000, () => {
  console.log('listening on port', port)
});


// app.get('/pokemon', (req, res) => {
//   res.send('Welcome to the Pokemon App!')
// })

app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: Pokemon
  })
})



