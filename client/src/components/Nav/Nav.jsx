import { Link } from 'react-router-dom'
import s from './Nav.module.scss'

const Nav = ({ handleMenu }) => {
	return (
		<>
			<nav className={s.nav}>
				<Link to='/'>Главная</Link>
				<Link to='/login'>Вход</Link>
				<Link to='/register'>Регистрация</Link>
				<Link to='/cart'>Корзина</Link>
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
