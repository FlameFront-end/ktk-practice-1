import axios from 'axios'
import { useEffect, useState } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx'
import { products } from '../../data.js'
import s from './Admin.module.scss'

const Admin = () => {
	const [requests, setRequests] = useState([])

	const getClassName = (status) => {
		switch (status) {
			case 'Принято':
				return 'green'
			case 'Отказ':
				return 'red'
			case 'На рассмотрении':
				return 'yellow'
			default:
				return ''
		}
	}

	useEffect(() => {
		fetchRequests()
	}, [])

	const fetchRequests = () => {
		axios
			.get('/requests/all-requests')
			.then((r) => {
				const updatedRequests = r.data.requests.map((item) => {
					return {
						...item,
						product: products.find((p) => p.id === item.productId)
					}
				})
				setRequests(updatedRequests)
			})
			.catch((error) => {
				console.error('Failed to fetch requests:', error)
			})
	}

	const updateStatus = (requestId, newStatus) => {
		axios
			.patch('/requests/update-request-status', {
				requestId,
				status: newStatus
			})
			.then(() => {
				fetchRequests()
			})
			.catch((error) => {
				console.error('Failed to update status:', error)
			})
	}

	return (
		<MainLayout>
			<div className={s.wrapper}>
				<h2>Все заявки</h2>
				<ul className={s.list}>
					{requests.map((item) => (
						<li key={item.id} className={s.item}>
							<img src={item.product.image} alt={item.product.name} />
							<div className={s.text}>
								<h3>Заказал: {item.user.fullName}</h3>
								<p>
									Тел: <a href=''>{item.user.phone}</a>
								</p>
								<h3>{item.product.name}</h3>
								<p>Порода: {item.product.breed}</p>
								<p>Пол: {item.product.gender}</p>
								<p>Расцветка: {item.product.color}</p>
								<p>
									Дополнительная атрибутика:{' '}
									{item.product.attributes.join(', ')}
								</p>
								<p className={getClassName(item.status)}>{item.status}</p>
								<div className={s.buttons}>
									<button onClick={() => updateStatus(item.id, 'Принято')}>
										Принято
									</button>
									<button onClick={() => updateStatus(item.id, 'Отказ')}>
										Отказ
									</button>
									<button
										onClick={() => updateStatus(item.id, 'На рассмотрении')}
									>
										На рассмотрении
									</button>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</MainLayout>
	)
}

export default Admin
