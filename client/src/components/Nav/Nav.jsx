import { Link } from 'react-router-dom'
import s from './Nav.module.scss'
import { useSnapshot } from 'valtio'
import { state } from '../../state/index.js'

const Nav = ({ handleMenu }) => {
	const snap = useSnapshot(state)
	return (
		<>
			<nav className={s.nav}>
				<Link to='/'>Главная</Link>
				<Link to='/admin'>Админ панель</Link>
				<Link to='/login'>Вход</Link>
				<Link to='/register'>Регистрация</Link>
				<div className={s.cart}>
					<Link to='/cart'>Корзина</Link>
					<div className={s.cart_count}>{snap.shopProductArray.length}</div>
				</div>
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
