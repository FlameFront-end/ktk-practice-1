import React from 'react'
import ProductItem from '../ProductItem/ProductItem.jsx'
import product1 from '../../../assets/product-1.jpg'
import product2 from '../../../assets/product-2.jpg'
import s from './ProductGrid.module.scss'

const ParrotGrid = () => {
	const products = [
		{
			id: 1,
			name: 'Charlie',
			breed: 'African Grey',
			gender: 'Male',
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
			attributes: ['Playful', 'Colorful'],
			image: product2
		},
		{
			id: 1,
			name: 'Charlie',
			breed: 'African Grey',
			gender: 'Male',
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
			attributes: ['Playful', 'Colorful'],
			image: product2
		},
		{
			id: 1,
			name: 'Charlie',
			breed: 'African Grey',
			gender: 'Male',
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
			attributes: ['Playful', 'Colorful'],
			image: product2
		},
		{
			id: 1,
			name: 'Charlie',
			breed: 'African Grey',
			gender: 'Male',
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
			attributes: ['Playful', 'Colorful'],
			image: product2
		}
	]

	return (
		<div className={s.wrapper}>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	)
}

export default ParrotGrid
