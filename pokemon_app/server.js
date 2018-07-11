const express = require("express");
const app = express();
const PORT = 3400;

pokemon = require("./models/pokemon.js");

app.use(express.static('public'))

app.get('/asdf', (req, res) => {            //// This is a test "get"
  res.send('Welcome to the Pokemon App!')   //// This returns the string
});

app.get("/pokemon", (req, res) => {  //// Express's own method "Get" allowing /pokemon to be part of the url to launch the rest of this
  res.render("index.ejs")      //// Render always look in views folder, added index.ejs as string to search for
});

app.get("/pokemon/:id", (req, res) => {  //// This takes us to individual pokemon's ID page
  res.render("show.ejs", {               //// Renders the entire Show.ejs page
      pokemon: pokemon[req.params.id]    //// Provides id number to allow proper index to load- corresponding with line 14's url
  })
});





app.listen(3400, () => {      //// This runs listen function, setting up the port. Also logs for troubleshoting.
  console.log("Server is on port: 3400");
})
