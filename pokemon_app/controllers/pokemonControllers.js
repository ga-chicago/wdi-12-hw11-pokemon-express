const express = require("express");
const router = express.Router();


pokemon = require("../models/pokemon.js");



router.get("/", (req, res) => {  //// Express's own method "Get" allowing /pokemon to be part of the url to launch the rest of this
  res.render("index.ejs")      //// Render always look in views folder, added index.ejs as string to search for
});

router.get("/:id", (req, res) => {  //// This takes us to individual pokemon's ID page
  res.render("show.ejs", {               //// Renders the entire Show.ejs page
      pokemon: pokemon[req.params.id]    //// Provides id number to allow proper index to load- corresponding with line 14's url
  })
});

router.delete('/:id', (req, res) => {
  pokemon.splice(req.params.id, 1)
  console.log(req.params.id, " this is req.params");

  res.redirect('/pokemon');
})





module.exports = router;
