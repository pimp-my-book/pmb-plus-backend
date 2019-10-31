import { hello, getOneBook, getMyBooks, getBooksByDegree, getLatestBooks, getBooksByCourse, getBooksByMinPrice, getBooksByMaxPrice, getBooksByUniversity } from './query'
import { addBook, editBook } from './mutation'

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
		getMyBooks: (root, args, context) => getMyBooks(args, context)

	},
	Mutation: {

		addBook: (root, { input: args }, context) => addBook({ input: args }, context),
		editBook: (root, { input: args }, context) => editBook({ input: args }, context)
	}
}
