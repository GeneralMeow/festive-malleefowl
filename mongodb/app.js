var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// var service = build('books', 'v1', developerKey="AIzaSyAOmhWYOlexG0QKLtsr3F0VCaHTOPHyCZk")
var index = require('./routes/index')
var users = require('./routes/users')

var app = express()
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/users', users)

<<<<<<< HEAD

// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URI ||
  'mongodb://localhost:27017/')
// Create a schema
var BookstoreSchema = new mongoose.Schema({
  name: String,
  title: String,
  author: String,
  description: String
  updated_at: { type: Date, default: Date.now },
});
// Create a model based on the schema
var Bookstore = mongoose.model( 'Bookstore', BookstoreSchema )

// Create a todo in memory
var book = new Book({ name: 'Master NodeJS', title: 'something', author: 'Getting there...', description: 'blah blah blah' })
// Save it to database
book.save(function(err){
  if(err)
    console.log( err )
  else
    console.log( todo )
});

book.create({
  name: 'Create something with Mongoose',
  title: 'true',
  author: 'this is one'},
  description: 'blah blah blah'
  function(err, book){
    if(err) console.log(err)
    else console.log(todo)
})



=======
>>>>>>> work
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status( err.status || 500 )
  res.render( 'error' )
});

module.exports = app
