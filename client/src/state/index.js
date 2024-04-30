import { proxy } from 'valtio'

const state = proxy({
	user: null,
	movies: null,
	popularMovies: null,
	searchMovies: null,
	users: null,
	actors: null
})

export { state }
