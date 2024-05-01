import s from './ProductItem.module.scss'
import { state } from '../../../state/index.js'
import { useSnapshot } from 'valtio'

const ProductItem = ({ product }) => {
	const snap = useSnapshot(state)

	const addToCart = () => {
		state.shopProductArray = [...state.shopProductArray, product]
	}

	const isProductInArray = snap.shopProductArray.some(
		(p) => p.id === product.id
	)

	const handleDelete = () => {
		state.shopProductArray = snap.shopProductArray.filter(
			(item) => item.id !== product.id
		)
	}

	return (
		<div className={s.item}>
			<img src={product.image} alt={product.name} />
			<div className={s.text}>
				<h3>{product.name}</h3>
				<p>Порода: {product.breed}</p>
				<p>Пол: {product.gender}</p>
				<p>Цвет: {product.color}</p>
				<p>Дополнительная атрибутика: {product.attributes.join(', ')}</p>
				{isProductInArray ? (
					<button className={s.delete} onClick={handleDelete}>
						Удалить из корзины
					</button>
				) : (
					<button onClick={addToCart}>Добавить в корзину</button>
				)}
			</div>
		</div>
	)
}

export default ProductItem
