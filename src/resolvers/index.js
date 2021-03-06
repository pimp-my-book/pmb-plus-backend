import { hello, getBooksAtAUniversity, getOneBook, getMyBooks, getBooksByDegree, getLatestBooks, getBooksByCourse, getBooksByMinPrice, getBooksByMaxPrice, getBooksByUniversity, searchAllBooks, getUsersSettings } from './query'
import { addBook, editBook, deactivateBook, markAsSold, showEmail, showNumber, hideNumber, hideEmail } from './mutation'

export const resolvers = {
	Query: {
		hello: (root, args, context) => hello(args, context),
		getLatestBooks: (root, args, context) => getLatestBooks(args, context),
		getBooksByDegree: (root, args, context) => getBooksByDegree(args, context),
		getBooksByCourse: (root, args, context) => getBooksByCourse(args, context),
		getBooksByMinPrice: (root, args, context) => getBooksByMinPrice(args, context),
		getBooksByMaxPrice: (root, args, context) => getBooksByMaxPrice(args, context),
		getBooksByUniversity: (root, args, context) => getBooksByUniversity(args, context),
		getOneBook: (root, args, context) => getOneBook(args, context),
		getMyBooks: (root, args, context) => getMyBooks(args, context),
		searchAllBooks: (root, args, context) => searchAllBooks(args, context),
		getBooksAtAUniversity: (root, args, context) => getBooksAtAUniversity(args, context),
		getUsersSettings: (root, args, context) => getUsersSettings(args, context)

	},
	Mutation: {

		addBook: (root, { input: args }, context) => addBook({ input: args }, context),
		editBook: (root, { input: args }, context) => editBook({ input: args }, context),
		deactivateBook: (root, args, context) => deactivateBook(args, context),
		markAsSold: (root, args, context) => markAsSold(args, context),
		showEmail: (root, args, context) => showEmail(args, context),
		showNumber: (root, args, context) => showNumber(args, context),
		hideNumber: (root, args, context) => hideNumber(args, context),
		hideEmail: (root, args, context) => hideEmail(args, context)
	}
}
