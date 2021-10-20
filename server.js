/* eslint-disable no-undef */
// server.js

import express from 'express';

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
