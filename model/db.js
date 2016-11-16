const mongoose = require('mongoose')
const DATABASE_URL =   'mongodb://localhost:27017/mallee_books'
const { book_data } = require('../data')
const { Bookstore } = require('./instance')

mongoose.connect(
  process.env.MONGODB_URI ||
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URI ||
  'mongodb://localhost:27017/mallee_books')

const dataMatchingSchema = book_data.map( bookData => {
  return {
    title: bookData.title,
    subTitle: bookData.subtitle,
    authors: bookData.authors,
    description: bookData.description,
    image_url: bookData.thumbnail,
    genre: bookData.categories
  }
})

const libraryPromise = Bookstore.create( dataMatchingSchema )

const displayBooks = () => { return libraryPromise }
const getAllBooks = () => { return book.find() }

//const addDataToBooks = () => {



module.exports = {
  dataMatchingSchema,
  getAllBooks,
  displayBooks,
  dataMatchingSchema,
  libraryPromise
}
