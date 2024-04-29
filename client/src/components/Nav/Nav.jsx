import { Link } from 'react-router-dom'
import s from './Nav.module.scss'

const Nav = () => {
	return (
		<nav className={s.nav}>
			<Link to='/'>Главная</Link>
			<Link to='/login'>Вход</Link>
			<Link to='/register'>Регистрация</Link>
		</nav>
	)
}

export default Nav
