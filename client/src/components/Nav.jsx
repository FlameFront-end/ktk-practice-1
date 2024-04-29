import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<div>
			<Link to='/'>Главная</Link>
			<Link to='/login'>Вход</Link>
			<Link to='/register'>Регистрация</Link>
		</div>
	)
}

export default Nav
