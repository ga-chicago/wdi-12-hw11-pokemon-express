const express = require("express");
const app = express();


pokemon = require("./models/pokemon.js");

app.use(express.static('public'))           //// This links to public directory which contains client CSS styling



// Require the controller after the middleware
const pokemonControllers = require("./controllers/pokemonControllers");

app.use("/pokemon", pokemonControllers);

app.listen(3400, () => {      //// This runs listen function, setting up the port. Also logs for troubleshoting.
  console.log("Server is on port: 3400");
})
