import s from './ProductItem.module.scss'
import React from 'react'

const ProductItem = ({ product }) => {
	return (
		<div className={s.item}>
			<img src={product.image} alt={product.name} />
			<div className={s.text}>
				<h3>{product.name}</h3>
				<p>Breed: {product.breed}</p>
				<p>Gender: {product.gender}</p>
				<p>Color: {product.color}</p>
				<p>Additional Attributes: {product.attributes.join(', ')}</p>
				<button>Add to Cart</button>
			</div>
		</div>
	)
}

export default ProductItem
