const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<a href="/prerender-with-header">with header</p>');
});

app.get('/prerender-with-header', (req, res) => {
  res.set('Link', '</prerender-resource>; rel="prerender";');
  res.render('index');
});

app.get('/prerender-resource', (req, res) => {
  res.send('<p>Prerendered Resource!</p>');
});

app.listen(3000);
