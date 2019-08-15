//Test for addVendor Mutation
const resolvers = require('../src/resolvers/index')

const mockContext = {
    addVendor: jest.fn(),
    vendor: {
    vendorName: 'dreamville-uct',
    vendorDescription: 'a record label turned book store',
    vendorWebsite: 'www.singabouitme.com',
    vendorEmail: 'email@example',
    vendorPhone: '0210200000',
    vendorAddress: '34 Uigtvliet Street',
   
    }
}

describe('Add a vendor', ()=>{

    const {addVendor} = mockContext

    it("Adds a new vendor successfull",()=>{
      
    })

    it.skip("Needs a userID", ()=>{

    })

    it.skip("Needs a name", ()=>{
        
    })
})