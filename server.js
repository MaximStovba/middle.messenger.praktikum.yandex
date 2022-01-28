/* eslint-disable no-undef */
// server.js

import express from 'express';
import path from 'path';

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, '/dist/')));

app.use('/*', function (_req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
