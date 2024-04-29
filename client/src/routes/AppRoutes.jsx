import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'

const AppRoutes = () => {
	return (
		<HashRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Login />} path='/login' />
				<Route element={<Register />} path='/register' />
			</Routes>
		</HashRouter>
	)
}

export default AppRoutes
