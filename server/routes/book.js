import express from 'express';
import Books from '../controllers/book';
import middlewares from '../middlewares';

const USER_URL = '/api/users';
const BOOK_URL = '/api/books';

const { BookValidator: { bookValidator } } = middlewares;

const book = express.Router();

    book.post(`${BOOK_URL}/:userId/books`, Books.create, (req, res)=>{
    	bookValidator;
    }); //API for users  to  create a book
	book.get(`${BOOK_URL}`, Books.list); // API route for user to get all books in the database
	// book.get(`${BOOK_URL}:bookId`, Books.listId); //API route to get a book by its Id
	book.put(`${BOOK_URL}:bookId`, Books.modify); // API route for user to edit a book
	book.delete(`${BOOK_URL}:bookId`, Books.delete); // API route to delete a book

export default book;