import LayoutCenter from '../../layouts/LayoutCenter/LayoutCenter.jsx'
import s from './Cart.module.scss'
import React from 'react'
import { useSnapshot } from 'valtio'
import { state } from '../../state/index.js'

const Cart = () => {
	const snap = useSnapshot(state)

	return (
		<LayoutCenter>
			<div className={s.wrapper}>
				<h2>Корзина</h2>
				<ul className={s.list}>
					{snap.shopProductArray.map((item) => (
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
