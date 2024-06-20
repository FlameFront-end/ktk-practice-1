import { Link } from 'react-router-dom'
import s from './Nav.module.scss'
import { useSnapshot } from 'valtio'
import { state } from '../../state/index.js'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getCookie } from '../../utils/index.js'
import { useNavigate } from 'react-router-dom'

const Nav = ({ handleMenu }) => {
	const snap = useSnapshot(state)
	const [user, setUser] = useState(null)
	const navigate = useNavigate()

	const hasToken = Cookies.get('_token') !== undefined

	const onLogout = () => {
		Cookies.remove('_token')
		navigate('/')
	}

	useEffect(() => {
		console.log('snap.user', snap.user)
		if (hasToken && !snap.user?.id) {
			axios
				.get('/auth/me', {
					headers: {
						authorization: getCookie('_token')
					}
				})
				.then((r) => {
					state.user = r.data.user
				})
				.catch((error) => {
					console.error('Failed to login:', error)
				})
		}
	}, [])

	return (
		<>
			<nav className={s.nav}>
				<Link to='/'>Главная</Link>

				{hasToken && snap.user ? (
					<>
						{snap.user.is_admin && <Link to='/admin'>Админ панель</Link>}

						<Link to='/my_res'>Мои заявки</Link>
						<div className={s.cart}>
							<Link to='/cart'>Корзина</Link>
							<div className={s.cart_count}>{snap.shopProductArray.length}</div>
						</div>
					</>
				) : null}

				{!hasToken ? (
					<>
						<Link to='/login'>Вход</Link>
						<Link to='/register'>Регистрация</Link>
					</>
				) : (
					<button className={s.logout} onClick={onLogout}>
						Выход
					</button>
				)}
			</nav>

			<nav className={s.nav_mobile}>
				<button onClick={handleMenu}>
					<span className={s.line}></span>
					<span className={s.line}></span>
					<span className={s.line}></span>
				</button>
			</nav>
		</>
	)
}

export default Nav
