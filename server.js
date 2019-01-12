'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3001;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, (err) => {
  if (err) {
    return console.log("Something went wrong.", err);
  }
  console.log("Server listening on port: " + port);
});
