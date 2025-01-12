const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Render!');
});

// New route to return a name
app.get('/name', (req, res) => {
  res.send('John Doe');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});