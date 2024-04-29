import image from '../../assets/registration-form-1.jpg'
import s from './Register.module.scss'
import { Input } from '../../components'
import LayoutCenter from '../../layouts/LayoutCenter/LayoutCenter.jsx'

const Register = () => {
	return (
		<LayoutCenter>
			<div className={s.wrapper}>
				<div className={s.left}>
					<img src={image} alt='' />
				</div>
				<div className={s.right}>
					<h3>Registration Form</h3>
					<div className={s.row}>
						<Input className={s.input} />
						<Input className={s.input} />
					</div>
					<Input />

					<Input />
					<Input />
					<Input />
					<button>Register</button>
				</div>
			</div>
		</LayoutCenter>
	)
}

export default Register
