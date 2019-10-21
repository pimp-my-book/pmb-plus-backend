import db from '../../libs/db'

export const hello = (args, context) => {

	return console.log(db) && console.log(JSON.parse(JSON.stringify(db)))
}
