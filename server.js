const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

app.post('/test', (req, res) => {
  console.log('Jemand hat angeklopft!');
  res.send('Nachricht erhalten! Dein Server funktioniert.');
});

app.listen(3000, () => {
  console.log('Server läuft auf http://localhost:3000');
});

