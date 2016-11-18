const mongoose = require('mongoose')
const DATABASE_URL =   'mongodb://festive:12345@ds155727.mlab.com:55727/mallee_books' || 'mongodb://localhost:27017/mallee_books'
const { book_data } = require('../data')
const { Bookstore } = require('./instance')
const books = require('google-books-search')


mongoose.connect( DATABASE_URL)
  //'mongodb://festive:12345@ds155727.mlab.com:55727/mallee_books')
  // process.env.MONGODB_URI ||
  // process.env.MONGOLAB_URI ||
  // process.env.MONGOHQ_URI ||
   //'mongodb://localhost:27017/mallee_books')

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

//const bookSearch = books.search
// const bookSearch = () => {
//
//   books.search('e', function(error, results) {
//     if (!error) {
//       console.log(results);
//       return results
//     } else {
//       console.log(error);
//       return error
//     }
//   });
// }

const bookSearch = (callback) => {

  books.search('e', function(error, results) {
    if (!error) {
      callback(results)
    } else {
      callback(error)
    }
  });
}




module.exports = {
  dataMatchingSchema,
  getAllBooks,
  displayBooks,
  dataMatchingSchema,
  libraryPromise,
  bookSearch
}
