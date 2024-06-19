import { setCookie } from 'nookies'

export const handleSuccessLogin = (token) => {
	setCookie(null, '_token', token, {
		path: '/'
	})
}
