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

		let booksByDegree = await db.query(`SELECT book_id,book_title, book_grade,book_price,book_image,book_degree  FROM book
		ORDER BY book_degree`)



		//console.log(booksByDegree)






		await db.end()
		/* add to frontend rather
		let groupByDegree = booksByDegree.reduce((acc, it) =>
			(acc[it.book_degree] = it, acc), {})
		console.log(groupByDegree)
*/
		return booksByDegree.map(item => ({
			ID: item.book_id,
			title: item.book_title,
			grade: item.book_grade,
			price: item.book_price,
			image: item.book_image,
			degree: item.book_degree
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
		let booksByCourse = await db.query(`SELECT book_id,book_title, book_grade,book_price,book_image,book_course  FROM book
`)
		await db.end()
		return booksByCourse.map(item => ({
			ID: item.book_id,
			title: item.book_title,
			grade: item.book_grade,
			price: item.book_price,
			image: item.book_image,
			course: item.book_course
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
book_description ,
book_author,
book_grade,
book_price,
book_condition,
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
WHERE book_id = VALUES(?)`, [args.ID])


		await db.end

		return {
			title: viewBook.book_title,
			description: viewBook.book_description,
			author: viewBook.book_author,
			grade: viewBook.book_grade,
			price: viewBook.book_price,
			image: viewBook.book_image,
			edition: viewBook.book_edition,
			location: viewBook.book_location,
			ISBN: viewBook.book_isbn,
			degree: viewBook.book_degree,
			course: viewBook.book_course,
			univeristy: viewBook.book_univeristy,
			ownerEmail: viewBook.owner_email,
			ownerName: viewBook.owner_name,
			owner: viewBook.book_owner,
			dateUploaded: viewBook.date_uploaded
		}
	} catch (e) {
		return e
	}
}
