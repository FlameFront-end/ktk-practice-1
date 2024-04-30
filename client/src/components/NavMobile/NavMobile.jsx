import arrow from '../../assets/arrow.svg'
import s from './NavMobile.module.scss'
import { Link } from 'react-router-dom'

const NavMobile = ({ onClose }) => {
	return (
		<nav className={s.burger}>
			<ul className={s.list}>
				<li className={s.item}>
					<Link to='/' onClick={onClose}>
						Главная
						<img src={arrow} alt='arrow' />
					</Link>
				</li>
				<li className={s.item}>
					<Link to='/login' onClick={onClose}>
						Вход
						<img src={arrow} alt='arrow' />
					</Link>
				</li>
				<li className={s.item}>
					<Link to='/register' onClick={onClose}>
						Регистрация
						<img src={arrow} alt='arrow' />
					</Link>
				</li>
				<li className={s.item}>
					<Link to='/cart' onClick={onClose}>
						Корзина
						<img src={arrow} alt='arrow' />
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavMobile
