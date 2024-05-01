import { proxy } from 'valtio'

const state = proxy({
	shopProductArray: []
})

export { state }
