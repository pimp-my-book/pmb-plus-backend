import db from '../../libs/db'

export const hello = (args, context) => {

	return console.log(db) && console.log(JSON.parse(JSON.stringify(db)))
}


//getLatestBooks
export const getLatestBooks = async (args, context) => {
	return "null"
}
//getBooksByDegree
export const getBooksByDegree = async (args, context) => {
	return "null"
}
//getBooksByCourse
export const getBooksByCourse = async (args, context) => {
	return "null"
}
//getBooksByMinPrice
export const getBooksByMinPrice = async (args, context) => {
	return "null"
}
//getBooksByUniversity
export const getBooksByUniversity = async (args, context) => {
	return "null"
}