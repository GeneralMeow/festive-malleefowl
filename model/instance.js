const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookstoreSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  authors: [String],
  description: String,
  image_url: String,
  genre: [String]
})
// Create a model based on the schema
const Bookstore = mongoose.model( 'Bookstore', BookstoreSchema )
//
const book = new Bookstore({
  title: 'Dreams of My Father',
  subTitle: 'A Presidential Story',
  authors: ['Obama'],
  description: 'Hello',
  image_url: 'http://google.com',
  genre: 'Autobiography'
})

book.save(function(err){
  if(err) console.log( err )
  else console.log( book )
})

module.exports = { Bookstore }

// book.create({
//   title:
//   subTitle:
//   author:
//   description:
//   image_url:
//   genre:
//   function(err, book){
//     if(err) console.log(err)
//     else console.log(todo)
// })
