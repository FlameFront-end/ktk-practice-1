import image from '../../assets/registration-form-1.webp'
import s from './Register.module.scss'
import { Input } from '../../components'
import LayoutCenter from '../../layouts/LayoutCenter/LayoutCenter.jsx'
import { useState } from 'react'
import { showErrorSnackbar, showSuccessSnackbar } from '../../utils'
import axios from '../../utils/axios.js'
import { useNavigate } from 'react-router-dom'

const Register = () => {
	const navigate = useNavigate()
	const [data, setData] = useState({
		fullName: '',
		login: '',
		tel: '',
		email: '',
		password: ''
	})

	const handleSubmit = async (e) => {
		try {
			e.preventDefault()

			const preparedData = {
				...data,
				username: data.fullName?.trim(),
				email: data.email?.trim(),
				password: data.password?.trim(),
				phone: data.tel?.trim()
			}

			const { email, password, fullName, tel, login } = preparedData

			if (!fullName.trim()) {
				return showErrorSnackbar({
					message: 'ФИО не указано'
				})
			}

			if (!login.trim()) {
				return showErrorSnackbar({
					message: 'Логин не указан'
				})
			}

			if (!tel.trim()) {
				return showErrorSnackbar({
					message: 'Телефон не указан'
				})
			}

			if (!email.trim()) {
				return showErrorSnackbar({
					message: 'Почта не указана'
				})
			}

			if (!(email.indexOf('@') >= 0)) {
				return showErrorSnackbar({
					message: 'Почта указана некорретно'
				})
			}

			if (!password.trim()) {
				return showErrorSnackbar({
					message: 'Пароль не указан'
				})
			}

			axios.post('/auth/register', preparedData).then(() => {
				showSuccessSnackbar('Успешная регистрация аккаунта')
				setData({
					fullName: '',
					tel: '',
					login: '',
					password: '',
					email: ''
				})
			})
			navigate('/login')
		} catch (err) {
			showErrorSnackbar({ message: 'Что-то пошло не так' })
			console.error(err)
		}
	}
	const onHandleChange = (value, key) => {
		setData((prevData) => ({
			...prevData,
			[key]: value
		}))
	}

	return (
		<LayoutCenter>
			<div className={s.wrapper}>
				<div className={s.left}>
					<img src={image} alt='' />
				</div>
				<form onSubmit={handleSubmit} className={s.right}>
					<h3 className={s.title}>Регистрация аккаунта</h3>
					<div className={s.row}>
						<Input
							className={s.input}
							placeholder='ФИО'
							onChange={(e) => onHandleChange(e.target.value, 'fullName')}
							value={data.fullName}
						/>
						<Input
							className={s.input}
							placeholder='Логин'
							onChange={(e) => onHandleChange(e.target.value, 'login')}
							value={data.login}
						/>
					</div>
					<Input
						placeholder='Телефон'
						onChange={(e) => onHandleChange(e.target.value, 'tel')}
						value={data.tel}
					/>
					<Input
						placeholder='Email'
						onChange={(e) => onHandleChange(e.target.value, 'email')}
						value={data.email}
					/>
					<Input
						placeholder='Пароль'
						type='password'
						onChange={(e) => onHandleChange(e.target.value, 'password')}
						value={data.password}
					/>
					<button type='submit'>Зерегестрироваться</button>
				</form>
			</div>
		</LayoutCenter>
	)
}

export default Register
