var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var overviewsRouter = require('./routes/overviews');

var app = express();

// sets port 8080 to default or unless otherwise specified in the environment
app.set('port', process.env.PORT || 8080);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Serve public assets as static.
//app.use('/public', express.static(path.join(__dirname, '/public')))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',apiRouter);
app.use('/overviews',overviewsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Start the server
function startServer(){
  app.listen(app.get('port'));
  console.log("Express server listening on port " + app.get('port'));
}

startServer();

module.exports = app;
