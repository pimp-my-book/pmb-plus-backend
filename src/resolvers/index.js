import {hello} from './query';
import {addVendor} from './mutation';

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context)
    },
    Mutation: {
        addVendor:(root, {input:args}, context) => addVendor({input:args}, context)
        
    }
}
