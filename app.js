var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan')

var boxOfficeRouter = require('./routes/api/movie/boxOffice');

var testRouter = require('./routes/test');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.unsubscribe(express.urlencoded({ extended: false }));
app.use(cookieParser);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', boxOfficeRouter);

app.use('/test', testRouter);

module.exports = app;