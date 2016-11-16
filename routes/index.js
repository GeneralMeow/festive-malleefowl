let mongoose = require('mongoose')
const DATABASE_URL =   'mongodb://localhost:27017/mallee_books'
let express = require('express')
let router = express.Router()
let { displayBooks } = require('../model/db')

/* GET home page. */
router.get('/', function(req, res, next) {
   displayBooks()
    .then((books) => {
      res.json(books)
    })
})



module.exports = router
