let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

// let service = build('books', 'v1', developerKey="AIzaSyAOmhWYOlexG0QKLtsr3F0VCaHTOPHyCZk")
let index = require('./routes/index')
let users = require('./routes/users')

let app = express()
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/users', users)



// Connect to MongoDB and create/use database called todoAppTest
mongoose.createConnection(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URI ||
  'mongodb://localhost:27017/mallee_books')
// Create a schema

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status( err.status || 500 )
  res.render( 'error' )
})

module.exports = app
