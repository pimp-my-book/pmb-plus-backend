const schema = `
"""
Add Book input
"""
input addBookInput {

    price: String!

    image: String!
    edition: String!
    title: String!
    author: String!
    ISBN: String!
    grade: String!
    univeristy: String
    course: String
    degree: String
  
}

"""
A book type 
"""
type Book  {
    ID: Int!
    dateUploaded: String!
    price: String!
    image: String!
    title: String!
    author: String!
    ISBN: String!
    edition: String!
    grade: String!
    owner: String!
    univeristy: String
    course: String
    degree: String
   
}
type S3Payload {
    signedRequest: String!,
    url: String!
}
type Mutation {
    addBook(input: addBookInput) : Book
    addBooks(fileName: String!, fileType: String!): S3Payload!
}
type Query {
     hello: String!
     connection: String
   
     getAllBooks: [Book]
     getOneBook(ID: Int): Book
}
`
export { schema }
