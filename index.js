const express = require('express');
const { isInteger } = require('lodash');
const app = express();
const port = 3000;

function facto(n) {
  if (isInteger(n) === false || n < 0) return null;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2;i <= n;i++) {
    result *= i;
  }
  return result;
}


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/factorial', (req, res) => {
  const { factorial } = req.query;
  res.redirect(`/factorial/${factorial}`)
  });
app.get('/factorial/:number', (req, res) => res.send(`${req.params.number}! is ${facto(Number(req.params.number))}`));

app.listen(port, () => console.log(`Server listening on port ${port}!`));