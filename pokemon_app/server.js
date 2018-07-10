const express = require("express");
const app = express();
const PORT = 3400;
pokemon = require("./models/pokemon.js");

app.get('/asdf', (req, res) => {

  res.send('Welcome to the Pokemon App!')   //// This returns the string
});

app.get("/pokemon", (req, res) => {  //// Express's own method "Get" allowing /pokemon to be part of the url to launch the rest of this
  res.render("index.ejs")      //// Render always look in views folder, added index.ejs as string to search for
});
















app.listen(3400, () => {
  console.log("Server is on port: 3400");
})
