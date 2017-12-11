const express = require('express');
const path = require('path');
const engines = require('consolidate');
const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', engines.jade);
// app.set('view engine', '.html');
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.render('index-link-tag.html');
});

app.get('/prerender-with-header', (req, res) => {
  res.set('Link', '</prerender-resource>; rel="prerender";');
  res.send('index-link-header.html');
});

app.get('/prerender-resource', (req, res) => {
  res.send('<p>Prerendered Resource!</p>');
});

app.listen(3000);
