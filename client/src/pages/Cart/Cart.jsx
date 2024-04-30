import product1 from '../../assets/product-1.jpg'
import product2 from '../../assets/product-2.jpg'
import LayoutCenter from '../../layouts/LayoutCenter/LayoutCenter.jsx'
import s from './Cart.module.scss'
import React from 'react'

const Cart = () => {
	const products = [
		{
			id: 1,
			name: 'Charlie',
			breed: 'African Grey',
			gender: 'Male',
			price: 2000,
			color: 'Grey',
			attributes: ['Talkative', 'Friendly'],
			image: product1
		},
		{
			id: 2,
			name: 'Polly',
			breed: 'Amazon',
			gender: 'Female',
			color: 'Green',
			price: 2000,
			attributes: ['Playful', 'Colorful'],
			image: product2
		},
		{
			id: 1,
			name: 'Charlie',
			breed: 'African Grey',
			gender: 'Male',
			color: 'Grey',
			price: 2000,
			attributes: ['Talkative', 'Friendly'],
			image: product1
		},
		{
			id: 2,
			name: 'Polly',
			breed: 'Amazon',
			gender: 'Female',
			color: 'Green',
			price: 2000,
			attributes: ['Playful', 'Colorful'],
			image: product2
		}
	]

	return (
		<LayoutCenter>
			<div className={s.wrapper}>
				<h2>Корзина</h2>
				<ul className={s.list}>
					{products.map((item) => (
						<li key={item.id} className={s.item}>
							<img src={item.image} alt={item.name} />
							<div className={s.text}>
								<h3>{item.name}</h3>
								<p>Порода: {item.breed}</p>
								<p>Пол: {item.gender}</p>
								<p>Расцветка: {item.color}</p>
								<p>Дополнительная атрибутика: {item.attributes.join(', ')}</p>
							</div>
						</li>
					))}
				</ul>
				<button className={s.btn}>Отправить заявку</button>
			</div>
		</LayoutCenter>
	)
}

export default Cart
