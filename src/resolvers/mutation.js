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


    try {
        const addBookInput = {
            title: args.title,
            description: args.description,
            author: args.author,
            grade: args.grade,
            price: args.price,
            image: args.image,
            edition: args.edition,
            location: args.location,
            ISBN: args.ISBN,
            degree: args.degree,
            course: args.course,
            univeristy: args.univeristy
        }
        console.log(process.env.NODE_ENV)
        console.log(db)
        let newBook = await db.query(`INSERT INTO book (book_title,book_description,book_author,book_grade,book_price,book_condition,book_image,book_edition,book_location,book_isbn,book_degree,book_course,book_univeristy,product_id,book_owner) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                addBookInput.title,
                addBookInput.description,
                addBookInput.author,
                addBookInput.grade,
                addBookInput.price,
                'used',
                addBookInput.image,
                addBookInput.edition,
                addBookInput.location,
                addBookInput.ISBN,
                addBookInput.degree,
                addBookInput.course,
                addBookInput.univeristy,
                '1',
                context.event.requestContext.authorizer.claims.sub
            ]
        )
        console.log(newBook)
        await db.end()

        return {
            title: args.title,
            description: args.description,
            author: args.author,
            grade: args.grade,
            price: args.price,
            image: args.image,
            edition: args.edition,
            location: args.location,
            ISBN: args.ISBN,
            degree: args.degree,
            course: args.course,
            univeristy: args.univeristy,

        }

    } catch (e) {
        console.log(e)
        console.log(e.message)
        return e

    }
}
/*


*/
//editBook
export const editBook = async ({ input: args }, context) => {
    try {
        const editBookInput = {
            ID: args.ID,
            title: args.title,
            description: args.description,
            author: args.author,
            grade: args.grade,
            price: args.price,
            image: args.image,
            edition: args.edition,
            location: args.location,
            ISBN: args.ISBN,
            degree: args.degree,
            course: args.course,
            univeristy: args.univeristy
        }

        let updatedBook = db.query(`
        UPDATE book
        SET book_title = ?,book_description = ?,book_author = ?,book_grade = ?,book_price = ?,book_image = ?,book_edition = ?,book_location = ?,book_isbn = ?,book_degree = ?, book_course = ?,book_univeristy = ?


        WHERE book_id = ?;
        `, [
            editBookInput.title,
            editBookInput.description,
            editBookInput.author,
            editBookInput.grade,
            editBookInput.price,
            editBookInput.image,
            editBookInput.edition,
            editBookInput.location,
            editBookInput.ISBN,
            editBookInput.degree,
            editBookInput.course,
            editBookInput.univeristy,
            editBookInput.ID
        ])

        await db.end()
        console.log(updatedBook)
        return true
    } catch (e) {
        return e
    }
}


//deactivateBook
export const deactivateBook = async (args, context) => {
    try {

        let deactivatedBook = db.query(`UPDATE book SET deactivated_status = TRUE WHERE book_owner = ? AND book_id = ?`, [args.owner, args.ID])
        await db.end()
        return true
    } catch (e) {
        return e
    }
}

//markAsSold
export const markAsSold = async (args, context) => {
    try {

        let soldBook = db.query(`UPDATE book SET sold_Status = TRUE WHERE book_owner = ? AND book_id = ?`, [args.owner, args.ID])
        await db.end()
        return true
    } catch (e) {
        return e
    }
}

//edit getUsersSettings

export const showEmail = async (args, context) => {
    try {
        //First check if the user is in the table
        const isUserInTable = await db.query(`SELECT users_id FROM settings WHERE users_id = ?`, [args.userID])

        //if the user is in the table, go ahead and update their email settings
        if (Array.isArray(isUserInTable) && isUserInTable.length) {
            let emailSettings = db.query(`UPDATE settings SET show_email = TRUE WHERE users_id = ?`, [args.userID])
            await db.end()
            return true
        } else {

            //if not first insert them into the table
            let insertUser = db.query(`INSERT INTO settings(users_id) VALUES(?)`, [args.userID])
            await db.end()
            //then update their email preference
            let emailSettings = db.query(`UPDATE settings SET show_email = TRUE WHERE users_id = ?`, [args.userID])
            await db.end()
            return true
        }


    } catch (e) {
        return e
    }
}

//showNumber

export const showNumber = async (args, context) => {
    try {
        //First check if the user is in the table
        const isUserInTable = await db.query(`SELECT users_id FROM settings WHERE users_id = ?`, [args.userID])

        //if the user is in the table, go ahead and update their email settings
        if (Array.isArray(isUserInTable) && isUserInTable.length) {
            let numberSettings = db.query(`UPDATE settings SET show_number = TRUE WHERE users_id = ?`, [args.userID])
            await db.end()
            return true
        } else {

            //if not first insert them into the table
            let insertUser = db.query(`INSERT INTO settings(users_id) VALUES(?)`, [args.userID])
            await db.end()
            //then update their show_number preference
            let numberSettings = db.query(`UPDATE settings SET show_number = TRUE WHERE users_id = ?`, [args.userID])
            await db.end()
            return true
        }

    } catch (e) {
        return e
    }
}

//hideEmail 
export const hideEmail = async (args, context) => {
    try {

        let hideEmailPreference = db.query(`UPDATE settings SET show_email = FALSE WHERE users_id = ?`, [args.userID])
        await db.end()
        return true
    } catch (e) {
        return e
    }
}

//hideNumber
export const hideNumber = async (args, context) => {
    try {
        let hideNumberPreference = db.query(`UPDATE settings SET show_number = FALSE WHERE users_id = ?`, [args.userID])
        await db.end()
        return true
    } catch (e) {
        return e
    }
}