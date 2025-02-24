const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// RESTful API endpoint to roll a dice
app.get('/api/roll', (req, res) => {
  // Allow an optional query parameter to set the number of sides
  const sides = parseInt(req.query.sides) || 6;
  const roll = Math.floor(Math.random() * sides) + 1;
  res.json({ roll: roll, sides: sides });
});

// Basic route for connectivity testing
app.get('/', (req, res) => {
  res.send("Dice Roller API is running.");
});

// Start the server
app.listen(port, () => {
  console.log(`Dice Roller API listening on port ${port}`);
});
