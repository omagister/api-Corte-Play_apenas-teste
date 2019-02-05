const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const corteRoute = require('./routes/corteRoute');
app.use('/', index);
app.use('/corte', corteRoute);
module.exports = app;