import { Link } from 'react-router-dom'
import s from './Nav.module.scss'
import { useSnapshot } from 'valtio'
import { state } from '../../state/index.js'
import Cookies from 'js-cookie'

const Nav = ({ handleMenu }) => {
	const snap = useSnapshot(state)
	const hasToken = Cookies.get('_token') !== undefined

	return (
		<>
			<nav className={s.nav}>
				<Link to='/'>Главная</Link>

				{hasToken ? (
					<>
						<Link to='/admin'>Админ панель</Link>
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
				) : null}
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
