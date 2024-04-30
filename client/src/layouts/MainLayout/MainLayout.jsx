import Nav from '../../components/Nav/Nav.jsx'
import s from './MainLayout.module.scss'
import Footer from '../../components/Footer/Footer.jsx'
import NavMobile from '../../components/NavMobile/NavMobile.jsx'
import { useState } from 'react'

const MainLayout = ({ children }) => {
	const [showBurger, setShowBurger] = useState(false)
	return (
		<div className={s.wrapper}>
			{showBurger && <NavMobile onClose={() => setShowBurger(false)} />}
			<div className='content'>
				<Nav handleMenu={() => setShowBurger((prevState) => !prevState)} />
				<div className={s.content}>{children}</div>
			</div>
			<Footer />
		</div>
	)
}

export default MainLayout
