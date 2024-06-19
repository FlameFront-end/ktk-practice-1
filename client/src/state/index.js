import { proxy } from 'valtio'

const state = proxy({
	shopProductArray: [],
	user: null
})

export { state }
