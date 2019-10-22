import { hello, getBooksByDegree, getLatestBooks, getBooksByCourse, getBooksByMinPrice, getBooksByUniversity } from './query'
import { addBook } from './mutation'

export const resolvers = {
	Query: {
		hello: (root, args, context) => hello(args, context),
		getLatestBooks: (root, args, context) => getLatestBooks(args, context),
		getBooksByDegree: (root, args, context) => getBooksByDegree(args, context),
		getBooksByCourse: (root, args, context) => getBooksByCourse(args, context),
		getBooksByMinPrice: (root, args, context) => getBooksByMinPrice(args, context),

		getBooksByUniversity: (root, args, context) => getBooksByUniversity(args, context),

	},
	Mutation: {

		addBook: (root, { input: args }, context) => addBook({ input: args }, context)
	}
}
