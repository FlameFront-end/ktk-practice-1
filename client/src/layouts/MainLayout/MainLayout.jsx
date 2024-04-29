import Nav from '../../components/Nav/Nav.jsx'
import s from './MainLayout.module.scss'
import Footer from '../../components/Footer/Footer.jsx'

const MainLayout = ({ children }) => {
	return (
		<div className={s.wrapper}>
			<div className='content'>
				<Nav />
				<div className={s.content}>{children}</div>
			</div>
			<Footer />
		</div>
	)
}

export default MainLayout
