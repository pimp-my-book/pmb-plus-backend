import db from '../../libs/db'

export const hello = (args, context) => {

	return `Welcome to PMB + ${db}`
}
