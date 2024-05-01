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

	return (
		<div className={s.item}>
			<img src={product.image} alt={product.name} />
			<div className={s.text}>
				<h3>{product.name}</h3>
				<p>Breed: {product.breed}</p>
				<p>Gender: {product.gender}</p>
				<p>Color: {product.color}</p>
				<p>Additional Attributes: {product.attributes.join(', ')}</p>
				{isProductInArray ? (
					<button disabled>Уже в корзине</button>
				) : (
					<button onClick={addToCart}>Добавить в корзину</button>
				)}
			</div>
		</div>
	)
}

export default ProductItem
