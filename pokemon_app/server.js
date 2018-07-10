const express = require("express");
const app = express();
const PORT = 3400;
pokemon = require("./models/pokemon.js");

app.get('/asdf', (req, res) => {

  res.send('Welcome to the Pokemon App!')
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon)
});
















app.listen(3400, () => {
  console.log("Server is on port: 3400");
})
