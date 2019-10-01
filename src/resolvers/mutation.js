//All the apps mutations are here
import db from '../../libs/db'

//Add Vendor
export const addVendor = async ({ input: args }, context) => {
    try {

        console.log(process.env.NODE_ENV)
        console.log(db)
        const addVendorInput = {
            vendorName: args.vendorName,
            vendorDescription: args.vendorDescription,
            vendorWebsite: args.vendorWebsite,
            vendorEmail: args.vendorEmail,
            vendorPhone: args.vendorPhone,
            vendorAddress: args.vendorAddress,
        }

        let newVendor = await db.query(`INSERT INTO vendor (vendor_name,vendor_description,vendor_website, vendor_address,vendor_email,vendor_phone_number,user_id,vendor_type_id ) VALUES(?,?,?,?,?,?,?,?)`,
            [
                addVendorInput.vendorName,
                addVendorInput.vendorDescription,
                addVendorInput.vendorWebsite,
                addVendorInput.vendorAddress,
                addVendorInput.vendorEmail,
                addVendorInput.vendorPhone,
                "94c3ae75-5a32-4c44-bc17-e80cbfc006a7",
                2
            ])
        console.log(newVendor)
        await db.end()

        return {
            vendorName: args.vendorName,
            vendorDescription: args.vendorDescription,
            vendorWebsite: args.vendorWebsite,
            vendorEmail: args.vendorEmail,
            vendorPhone: args.vendorPhone,
            vendorAddress: vendorAddress,
        }
    } catch (e) {
        if (e.code === 'ER_DUP_ENTRY') {
            return new Error('Something like this already exists')
        }
        else {

            return e
        }
    }
}


//Add Book mutation 

export const addBook = async ({ input: args }, context) => {
    const addBookInput = {
        title: args.title,
        description: args.description,
        author: args.author,
        grade: args.grade,
        price: args.price,
        image: args.image,
        edition: args.edition,
        location: args.location,
        isbn: args.isbn,
        degree: args.degree,
        course: args.course,
        univeristy: args.univeristy
    }

    let newBook = await db.query(`INSERT INTO book (book_title,book_description,book_author,book_grade,book_price,book_condition,book_image,book_edition,book_location,book_isbn,book_degree,book_course,book_univeristy,product_id,book_owner) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    [
        addBookInput.title,
        addBookInput.description,
        addBookInput.author,
        addBookInput.grade,
        addBookInput.price,
        addBookInput.image,
        addBookInput.edition,
        addBookInput.location,
        addBookInput.isbn,
        addBookInput.degree,
        addBookInput.course,
        addBookInput.univeristy,
        '1',
        '94c3ae75-5a32-4c44-bc17-e80cbfc006a7'
    ]
    )
}
/*


*/