import { hello } from './query'
import { addVendor, addBook } from './mutation'

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context)
    },
    Mutation: {
        addVendor: (root, { input: args }, context) => addVendor({ input: args }, context),
        addBook: (root, { input: args }, context) => addBook({ input: args }, context)
    }
}
