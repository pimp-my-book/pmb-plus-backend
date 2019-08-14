const schema = `
"""
Add Book input
"""
input addBookInput {
    
    productName: String!
    productDescription: String!
    
    price: String!
    vendor: String!
    image: String!
    edition: String!
    title: String!
    author: String!
    ISBN: String!
    grade: String!
  
}
"""
Add Vendor Input
"""
input addVendorInput {
    vendorName: String!
    vendorDescription: String!
    vendorWebsite: String
    vendorAddress: String!
    vendorEmail: String!
    vendorPhone: String!
}
"""
Buying List Type
"""
type BuyingList {
    ID: Int!
    store: String!
    books:[Book]!
}
"""
Vendor Type
"""
type Vendor {
    ID: Int!
    vendorName: String!
    vendorDescription: String!
    vendorWebsite: String
    vendorAddress: String!
    vendorEmail: String!
    vendorPhone: String!
    inventory: [Product]!
    buyingList: [BuyingList]!
}
"""
Product interface
"""
interface Product {
    ID: Int!
    productName: String!
    productDescription: String!
    dateUploaded: String!
    price: String!
    productType: String!
    vendor: String!
    image: String!
    
}
"""
A book type 
"""
type Book  {
    ID: Int!
    dateUploaded: String!
    price: String!
    vendor: String!
    image: String!
    productType: String!
    title: String!
    author: String!
    ISBN: String!
    edition: String!
    grade: String!
   
}
type S3Payload {
    signedRequest: String!,
    url: String!
}
type Mutation {
    addVendor(input: addVendorInput!): Vendor!
    addBook(input: addBookInput) : Book
    addBooks(fileName: String!, fileType: String!): S3Payload!
}
type Query {
     hello: String!
     connection: String
     """ 
     A query to get all the books a vendor has posted. 
     """
     getBooksByVendor(vendor:String!): [Book]
     getAllBooks: [Book]
     getOneBook(ID: Int): Book
}
`
export {schema}
