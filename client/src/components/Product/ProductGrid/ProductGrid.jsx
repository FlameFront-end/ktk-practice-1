import React from 'react'
import ProductItem from '../ProductItem/ProductItem.jsx'
import s from './ProductGrid.module.scss'
import { products } from '../../../data.js'

const ParrotGrid = () => {
	return (
		<div className={s.wrapper}>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	)
}

export default ParrotGrid
