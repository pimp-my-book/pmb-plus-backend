import db from '../../libs/db'

export const hello = (args, context) => {

	return console.log(db) && console.log(JSON.parse(JSON.stringify(db)))
}


//getLatestBooks
export const getLatestBooks = async (args, context) => {

	/* query

select book_id,book_title, book_grade,book_price,book_image  from book
where date_uploaded <= DATEADD(DAY,-5,GETDATE())

	*/
	return "null"
}
//getBooksByDegree
export const getBooksByDegree = async (args, context) => {

	/* query
select book_id,book_title, book_grade,book_price,book_image  from book
group by book_degree


	*/
	return "null"
}
//getBooksByCourse
export const getBooksByCourse = async (args, context) => {

	/* query
select book_id,book_title, book_grade,book_price,book_image  from book
group by course


	*/
	return "null"
}
//getBooksByMinPrice
export const getBooksByMinPrice = async (args, context) => {

	/* query
	select book_id,book_title, book_grade,book_price,book_image  from book
	where price <= 300



	*/
	return "null"
}

//getBooksByMaxPrice
export const getBooksByMaxPrice = async (args, context) => {

	/* query



	*/
	return "null"
}

//getBooksByUniversity
export const getBooksByUniversity = async (args, context) => {

	/* query



	*/
	return "null"
}