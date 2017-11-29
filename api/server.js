const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Character = require('./characterList/characterList.model');
const routes = require('./characterList/characterList.routes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/StarWarsDb', {
  useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);