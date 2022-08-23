require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/main');
const secureRoutes = require('./routes/secure');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const uri = process.env.MONGO_CONNECTION_URL;
mongoose.connect(uri, { useNewUrlParser : true,});
mongoose.connection.on('error', (error) => {
  console.log(error);
  process.exit(1);
});
mongoose.connection.on('connected', function () {
  console.log('connected to mongo');
});


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(cookieParser());
require('./auth/auth');
app.get('/game.html', passport.authenticate('jwt', { session : false }), function (req, res) {
  res.sendFile(__dirname + '/public/assets/js/game.js');
});
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
res.sendFile(__dirname + '/index.html');
});

app.use('/', routes);
app.use('/', passport.authenticate('jwt', { session : false }), secureRoutes);

app.use((req, res, next) => {
  res.status(404);
  res.json({ message: '404 - Not Found' });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error : err });
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server started on port ${process.env.PORT || 4000}`);
});