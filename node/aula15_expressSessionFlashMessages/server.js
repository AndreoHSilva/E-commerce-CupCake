require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
   .then(() => {
      console.log('Conectei a base de dados.');
      app.emit('pronto');
   }).catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const routes = require('./routes.js');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware.js');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(session({
   secret: 'jhsaghgdplsfgpd',
   store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
   //ttl: 1000 * 60 * 24 * 7,
   resave: false,
   saveUninitialized: false,
   cookie: {
      maxAge: 1000 * 60 * 24 * 7
   }
}));
app.use(flash());


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos própis Middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
   app.listen(3000, () => {
      console.log('Acessar http://localhost:3000');
      console.log('Servidor executando na porta 3000');
  });
});
