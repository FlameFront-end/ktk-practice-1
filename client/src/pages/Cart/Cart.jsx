import LayoutCenter from '../../layouts/LayoutCenter/LayoutCenter.jsx'
import s from './Cart.module.scss'
import React from 'react'
import { useSnapshot } from 'valtio'
import { state } from '../../state/index.js'
import { showErrorSnackbar, showSuccessSnackbar } from '../../utils/index.js'
import axios from 'axios'

const Cart = () => {
	const snap = useSnapshot(state)

	const handleSubmit = async () => {
		try {
			const productsIds = snap.shopProductArray.map((product) => product.id)

			axios
				.post('/requests/create-request', {
					userId: snap.user.id,
					productsIds
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
