const express = require("express");
const app = express();
const PORT = 3400

app.get('/asdf', (req, res) => {

  res.send('Welcome to the Pokemon App!')
});


















app.listen(3400, () => {
  console.log("Server is on port: 3400");
})
