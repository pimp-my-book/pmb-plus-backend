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
				grade: item.book_id,
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
		GROUP BY book_degree`)



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
			grade: item.book_id,
			price: item.book_price,
			image: item.book_image
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
GROUP BY book_course`)
		await db.end()
		return booksByCourse.map(item => ({
			ID: item.book_id,
			title: item.book_title,
			grade: item.book_id,
			price: item.book_price,
			image: item.book_image
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
			grade: item.book_id,
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
			grade: item.book_id,
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
	return "null"
}