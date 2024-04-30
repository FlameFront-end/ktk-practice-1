import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home, Cart, Register, Login } from '../pages'

const AppRoutes = () => {
	return (
		<HashRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Login />} path='/login' />
				<Route element={<Register />} path='/register' />
				<Route element={<Cart />} path='/cart' />
			</Routes>
		</HashRouter>
	)
}

export default AppRoutes
