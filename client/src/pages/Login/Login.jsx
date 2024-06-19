import image from '../../assets/registration-form-1.webp'
import s from './Login.module.scss'
import { Input } from '../../components'
import LayoutCenter from '../../layouts/LayoutCenter/LayoutCenter.jsx'
import { useState } from 'react'
import {
	handleSuccessLogin,
	showErrorSnackbar,
	showSuccessSnackbar
} from '../../utils'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { state } from '../../state/index.js'

const Login = () => {
	const navigate = useNavigate()
	const [data, setData] = useState({
		login: '',
		password: ''
	})

	const handleSubmit = async (e) => {
		try {
			e.preventDefault()

			const preparedData = {
				...data,
				password: data.password?.trim()
			}

			const { password, login } = preparedData

			if (!login.trim()) {
				return showErrorSnackbar({
					message: 'Почта не указана'
				})
			}
			if (!password.trim()) {
				return showErrorSnackbar({
					message: 'Пароль не указан'
				})
			}

			axios
				.post('/auth/login', {
					username: preparedData.login,
					password: preparedData.password
				})
				.then((responseLogin) => {
					window.localStorage.setItem('userId', responseLogin.data.user.id)
					showSuccessSnackbar('Успешный вход в аккаунт')
					handleSuccessLogin(responseLogin.data.token)
					navigate('/')
					state.user = responseLogin.data.user
				})
				.catch((error) => {
					console.error('Failed to login:', error)
				})
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
					<h3 className={s.title}>Вход в аккаунт</h3>
					<Input
						placeholder='Логин'
						onChange={(e) => onHandleChange(e.target.value, 'login')}
						value={data.login}
					/>
					<Input
						placeholder='Пароль'
						type='password'
						onChange={(e) => onHandleChange(e.target.value, 'password')}
						value={data.password}
					/>
					<button type='submit'>Войти</button>
				</form>
			</div>
		</LayoutCenter>
	)
}

export default Login
