import s from './MyRes.module.scss'
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx'
import { products } from '../../data.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getCookie } from '../../utils/index.js'
import LayoutCenter from '../../layouts/LayoutCenter/LayoutCenter.jsx'

const MyRes = () => {
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
		axios
			.get('/auth/me', {
				headers: {
					authorization: getCookie('_token')
				}
			})
			.then((r) => {
				const requests = []
				r.data.user.requests.map((item) => {
					addProductById(item.productId, requests, item.status)
				})

				setRequests(requests)
			})
			.catch((error) => {
				console.error('Failed to login:', error)
			})
	}, [])

	function addProductById(id, res, status) {
		const product = products.find((p) => p.id === id)
		if (product) {
			res.push({ ...product, status })
		}
	}

	return (
		<LayoutCenter>
			<div className={s.wrapper}>
				<h2>Мои заявки</h2>
				{requests?.length ? (
					<ul className={s.list}>
						{requests.map((item, index) => (
							<li key={index} className={s.item}>
								<img src={item.image} alt={item.name} />
								<div className={s.text}>
									<h3>{item.name}</h3>
									<p>Порода: {item.breed}</p>
									<p>Пол: {item.gender}</p>
									<p>Расцветка: {item.color}</p>
									<p>Дополнительная атрибутика: {item.attributes.join(', ')}</p>
									<p className={getClassName(item.status)}>{item.status}</p>
								</div>
							</li>
						))}
					</ul>
				) : (
					<div className={s.empty}>Заявок нет</div>
				)}
			</div>
		</LayoutCenter>
	)
}

export default MyRes
