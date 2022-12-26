const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/world', (req, res) => {
  res.send('Hello World! world');
});

app.get('/testing', (req, res) => {
  res.send('testing');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
