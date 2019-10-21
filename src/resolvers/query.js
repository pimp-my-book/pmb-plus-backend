import db from '../../libs/db'

export const hello = (args, context) => {
	console.log(db)
	return 'Welcome to PMB + '
}
