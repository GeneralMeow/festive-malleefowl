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
const book = new Bookstore

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
