import s from './ProductItem.module.scss'
import { state } from '../../../state/index.js'

const ProductItem = ({ product }) => {
	const addToCart = () => {
		state.shopProductArray = [...state.shopProductArray, product]
	}

	return (
		<div className={s.item}>
			<img src={product.image} alt={product.name} />
			<div className={s.text}>
				<h3>{product.name}</h3>
				<p>Breed: {product.breed}</p>
				<p>Gender: {product.gender}</p>
				<p>Color: {product.color}</p>
				<p>Additional Attributes: {product.attributes.join(', ')}</p>
				<button onClick={addToCart}>Добавить в корзину</button>
			</div>
		</div>
	)
}

export default ProductItem
