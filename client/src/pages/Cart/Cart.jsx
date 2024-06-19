import LayoutCenter from '../../layouts/LayoutCenter/LayoutCenter.jsx'
import s from './Cart.module.scss'
import React, { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import { state } from '../../state/index.js'
import {
	getCookie,
	showErrorSnackbar,
	showSuccessSnackbar
} from '../../utils/index.js'
import axios from 'axios'

const Cart = () => {
	const snap = useSnapshot(state)
	const [userId, setUserId] = useState(0)

	useEffect(() => {
		axios
			.get('/auth/me', {
				headers: {
					authorization: getCookie('_token')
				}
			})
			.then((r) => {
				setUserId(r.data.user?.id)
				console.log('r', JSON.parse(r.data.user.requests[0]))
			})
			.catch((error) => {
				console.error('Failed to login:', error)
			})
	}, [])

	const handleSubmit = async () => {
		try {
			const requests = snap.shopProductArray.map((product) => ({
				id: product.id,
				status: 'На рассмотрении'
			}))

			axios
				.post('/requests/create-request', {
					userId,
					requests
				})
				.then(() => {
					showSuccessSnackbar('Заявка отправлена успешно')
					state.shopProductArray = []
				})
				.catch((error) => {
					console.error('Failed to login:', error)
				})
		} catch (err) {
			showErrorSnackbar({ message: 'Что-то пошло не так' })
			console.error(err)
		}
	}

	const handleDelete = (id) => {
		state.shopProductArray = snap.shopProductArray.filter(
			(item) => item.id !== id
		)
	}

	return (
		<LayoutCenter>
			<div className={s.wrapper}>
				<h2>Корзина</h2>
				{snap.shopProductArray.length ? (
					<>
						<ul className={s.list}>
							{snap.shopProductArray.map((item) => (
								<li key={item.id} className={s.item}>
									<img src={item.image} alt={item.name} />
									<div className={s.text}>
										<h3>{item.name}</h3>
										<p>Порода: {item.breed}</p>
										<p>Пол: {item.gender}</p>
										<p>Расцветка: {item.color}</p>
										<p>
											Дополнительная атрибутика: {item.attributes.join(', ')}
										</p>
									</div>
									<button
										className={s.delete}
										onClick={() => handleDelete(item.id)}
									>
										Удалить
									</button>
								</li>
							))}
						</ul>
						<button className={s.btn} onClick={handleSubmit}>
							Отправить заявку
						</button>
					</>
				) : (
					<div className={s.empty}>Корзина пуста</div>
				)}
			</div>
		</LayoutCenter>
	)
}

export default Cart
