let mongoose = require('mongoose')
const DATABASE_URL =   'mongodb://localhost:27017/mallee_books'
let express = require('express')
let router = express.Router()
let { bookSearch } = require('../model/db')
// let databaseFunctions = require('../model/db')

/* GET home page. */
router.get('/', function(req, res, next) {

  const renderPage = (results) => {
    res.json(results)
  }

  // databaseFunctions.bookSearch(renderPage)
  //  bookSearch('e', (error, results) => {
  //      if (error) {
  //        results = error
  //      }
  //      res.json(results)
  //  })

  bookSearch(renderPage)
})



module.exports = router
