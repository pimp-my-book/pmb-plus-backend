export const hello = (args, context) => {
	return `PMB Plus' API is now LIVE!🎈 ${process.env.NODE_ENV},
	the context is ${context.event}
	`
}
