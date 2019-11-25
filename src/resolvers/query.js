import db from '../../libs/db'

export const hello = (args, context) => {

	return console.log(db) && console.log(JSON.parse(JSON.stringify(db)))
}

//https://itnext.io/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f

//getLatestBooks
export const getLatestBooks = async (args, context) => {

	/* query

select book_id,book_title, book_grade,book_price,book_image  from book
where date_uploaded <= DATEADD(DAY,-5,GETDATE())

	*/
	try {

		let latestBooks = await db.query(`SELECT book_id,book_title, book_grade,book_price,book_image  
		FROM book 
		WHERE date_uploaded <= date_add(curdate(),interval -5 day)`)

		console.log(latestBooks)
		await db.end()
		return latestBooks.map(item => (
			{
				ID: item.book_id,
				title: item.book_title,
				grade: item.book_grade,
				price: item.book_price,
				image: item.book_image
			}
		))
	} catch (e) {
		return e
	}
}
//getBooksByDegree
export const getBooksByDegree = async (args, context) => {

	/* query
select book_id,book_title, book_grade,book_price,book_image  from book
group by book_degree


	*/
	try {

		let booksByDegree = await db.query(`SELECT book_id,book_title, book_grade,book_price,book_image,book_degree, book_location  FROM book
		ORDER BY book_degree`)



		//console.log(booksByDegree)






		await db.end()
		/* add to frontend rather
		let groupByDegree = booksByDegree.reduce((acc, it) =>
			(acc[it.book_degree] = it, acc), {})
		console.log(groupByDegree)
*/
		//console.log(booksByDegree)
		return booksByDegree.map(item => ({
			ID: item.book_id,
			title: item.book_title,
			grade: item.book_grade,
			price: item.book_price,
			image: item.book_image,
			degree: item.book_degree,
			location: item.book_location
		}))
	} catch (e) {
		return e
	}
}
//getBooksByCourse
export const getBooksByCourse = async (args, context) => {

	/* query
SELECT book_id,book_title, book_grade,book_price,book_image  FROM book
GROUP BY course


	*/
	try {
		let booksByCourse = await db.query(`SELECT book_id,book_title, book_grade,book_price,book_image,book_course, book_location FROM book
`)
		await db.end()
		console.log(booksByCourse)
		return booksByCourse.map(item => ({
			ID: item.book_id,
			title: item.book_title,
			grade: item.book_grade,
			price: item.book_price,
			image: item.book_image,
			course: item.book_course,
			location: item.book_location
		}))
	} catch (e) {

	}
}
//getBooksByMinPrice
export const getBooksByMinPrice = async (args, context) => {

	/* query
	SELECT book_id,book_title, book_grade,book_price,book_image  FROM book
	WHERE price <= 300



	*/
	try {

		let booksByMinPrice = await db.query(`SELECT book_id,book_title, book_grade,book_price,book_image  FROM book
		WHERE book_price <= 300`)

		await db.end()
		return booksByMinPrice.map(item => ({
			ID: item.book_id,
			title: item.book_title,
			grade: item.book_grade,
			price: item.book_price,
			image: item.book_image
		}))
	} catch (e) {
		return e
	}
}

//getBooksByMaxPrice
export const getBooksByMaxPrice = async (args, context) => {

	/* query
select book_id,book_title, book_grade,book_price,book_image  from book
	where price => 500


	*/
	try {

		let booksByMaxPrice = await db.query(`SELECT book_id,book_title, book_grade,book_price,book_image  FROM book
		WHERE book_price  >= 500`)

		await db.end()
		return booksByMaxPrice.map(item => ({
			ID: item.book_id,
			title: item.book_title,
			grade: item.book_grade,
			price: item.book_price,
			image: item.book_image
		}))
	} catch (e) {
		return e
	}
}

//getBooksByUniversity
export const getBooksByUniversity = async (args, context) => {

	/* query
select book_id,book_title, book_grade,book_price,book_image  from book
group by book_univeristy


	*/
	try {

		let booksByUniversity = await db.query(`SELECT book_id,book_title, book_grade,book_price,book_image,book_univeristy  FROM book
		GROUP BY book_univeristy`)

		await db.end()
		return booksByUniversity.map(item => ({
			ID: item.book_id,
			title: item.book_title,
			grade: item.book_grade,
			price: item.book_price,
			image: item.book_image,
			univeristy: item.book_univeristy
		}))
	} catch (e) {
		return e
	}

}

//getOneBook
export const getOneBook = async (args, context) => {
	try {
		let viewBook = await db.query(`SELECT book_id,
book_title,
book_description,
book_author,
book_grade,
book_price,
date_uploaded,
book_image,
book_edition,
book_location,
book_isbn,
book_degree,
book_course,
book_univeristy,
book_owner,
owner_name,
owner_email

FROM book
WHERE book_id = ?`, [args.ID])


		await db.end

		console.log(viewBook)

		const makeNumberVisiable = await db.query(`SELECT show_number FROM settings WHERE users_id = ?`, [viewBook[0].book_owner])
		await db.end
		console.log(makeNumberVisiable)
		return {
			title: viewBook[0].book_title,
			description: viewBook[0].book_description,
			author: viewBook[0].book_author,
			grade: viewBook[0].book_grade,
			price: viewBook[0].book_price,
			image: viewBook[0].book_image,
			edition: viewBook[0].book_edition,
			location: viewBook[0].book_location,
			ISBN: viewBook[0].book_isbn,
			degree: viewBook[0].book_degree,
			course: viewBook[0].book_course,
			univeristy: viewBook[0].book_univeristy,
			ownerEmail: viewBook[0].owner_email,
			ownerName: viewBook[0].owner_name,
			owner: viewBook[0].book_owner,
			dateUploaded: viewBook[0].date_uploaded
		}
	} catch (e) {
		return e
	}
}


// getMyBooks
export const getMyBooks = async (args, context) => {
	try {

		let usersBooks = await db.query(`SELECT book_id,book_title,book_image FROM book WHERE book_owner = ?`, [args.owner])



		await db.end()

		if (usersBooks.length < 0) {
			return 'You have not posted any books...'
		} else {
			return usersBooks.map(item => ({
				ID: item.book_id,
				title: item.book_title,
				image: item.book_image

			}))
		}

	} catch (e) {
		return e
	}
}

//searchAllBooks
export const searchAllBooks = async (args, context) => {
	try {
		const whereQuery = `book_title LIKE %?% `
		let searchedBooks = await db.query("SELECT book_id,book_title,book_image FROM book WHERE  book_title REGEXP ? OR book_isbn LIKE ? OR book_author REGEXP ?", [args.searchTerm, args.searchTerm, args.searchTerm])

		await await db.end()

		return searchedBooks.map(item => ({
			ID: item.book_id,
			title: item.book_title,
			image: item.book_image
		}))
	} catch (e) {
		return e
	}

	//or book_isbn LIKE %?% or book_author LIKE %?%
}

//getBooksAtAUniversity
export const getBooksAtAUniversity = async (args, context) => {
	try {
		let booksFromUniversity = await db.query(`SELECT book_id,book_title, book_grade,book_price,book_image,book_univeristy FROM book WHERE book_univeristy = ?`, [args.university])

		await db.end()


		return booksFromUniversity.map(item => ({
			ID: item.book_id,
			title: item.book_title,
			image: item.book_image,
			grade: item.book_grade,
			price: item.book_price,
			image: item.book_image,
			univeristy: item.book_univeristy
		}))
	} catch (e) {
		return e
	}
}

//getUsersSettings

export const getUsersSettings = async (args, context) => {
	try {
		let usersSettings = await db.query(`SELECT settings_id,show_email,show_number FROM settings WHERE users_id = ?`, [args.userID])
		await db.end()
		return {
			ID: usersSettings[0].settings_id,
			showEmail: usersSettings[0].show_email,
			showNumber: usersSettings[0].show_number

		}
	} catch (e) {
		return e
	}
}