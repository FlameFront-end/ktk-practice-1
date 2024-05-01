import Nav from '../../components/Nav/Nav.jsx'
import s from './LayoutCenter.module.scss'
import { useState } from 'react'
import NavMobile from '../../components/NavMobile/NavMobile.jsx'

const LayoutCenter = ({ children }) => {
	const [showBurger, setShowBurger] = useState(false)
	return (
		<div className={s.wrapper}>
			{showBurger && <NavMobile onClose={() => setShowBurger(false)} />}
			<div className='content'>
				<Nav handleMenu={() => setShowBurger((prevState) => !prevState)} />
				<div className={s.content}>{children}</div>
			</div>
		</div>
	)
}

export default LayoutCenter
