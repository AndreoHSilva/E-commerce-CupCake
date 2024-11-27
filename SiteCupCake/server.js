require('dotenv').config(); //variaveis de ambiente conf no arquivo .env
const express = require('express');
const app = express();
const mongoose = require('mongoose'); //modelar a base de dados
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
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMidleware } = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'frontend/assets')));
app.use(express.static(path.resolve(__dirname, './')));
app.use(session({
   secret: 'jhsaghgdplsfgpd',
   store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
   resave: false,
   saveUninitialized: false,
   cookie: {
      maxAge: 1000 * 60 * 24 * 7
   }
}));
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos própis Middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMidleware);
app.use(routes);

app.on('pronto', () => {
   app.listen(3000, () => {
      console.log('Acessar http://localhost:3000');
      console.log('Servidor executando na porta 3000');
   });
});
