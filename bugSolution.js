const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database interaction to get user data based on userId ...
  if (!userData) {
    return res.status(404).send('User not found'); // Correct way
  }
  res.send(userData); 
});