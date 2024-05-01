import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home, Cart, Register, Login, Admin, MyRes } from '../pages'

const AppRoutes = () => {
	return (
		<HashRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Login />} path='/login' />
				<Route element={<Register />} path='/register' />
				<Route element={<Cart />} path='/cart' />
				<Route element={<Admin />} path='/admin' />
				<Route element={<MyRes />} path='/my_res' />
			</Routes>
		</HashRouter>
	)
}

export default AppRoutes
