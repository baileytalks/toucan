const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cacheControl = require('express-cache-controller');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(port, () => console.log(`Toucan listening on port ${port}!`))

app.use(cacheControl({
  maxAge: 60
}));
