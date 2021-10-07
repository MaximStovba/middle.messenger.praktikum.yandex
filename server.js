// server.js

import express from 'express';
// import fs from 'fs';
// import { Templator } from './src/utils/templator.js';

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(`${__dirname}/static`));

// app.engine('html', function (filePath, options, callback) {
//   // define the template engine
//   fs.readFile(filePath, function (err, content) {
//     if (err) return callback(err);
//     // this is template engine
//     const tmpl = new Templator(content.toString());
//     const renderedTemplate = tmpl.compile(options);
//     return callback(null, renderedTemplate);
//   });
// });

// app.set('views', './views'); // specify the views directory
// app.set('view engine', 'html'); // register the template engine

// app.get('/', function (req, res) {
//   res.render('index', {
//     text: 'Главная страница!',
//     className: 'main',
//   });
// });

// app.get('/home', function (req, res) {
//   res.render('home', {
//     text: 'Мой очень важный span',
//     className: 'chats',
//     user: {
//       info: {
//         firstName: 'Alexander',
//       },
//     },
//   });
// });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
