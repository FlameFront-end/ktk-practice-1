import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx'
import s from './Home.module.scss'
import { Input, ProductGrid } from '../../components'
import { products } from '../../data.js'

const Home = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const handleSearch = (event) => {
		setSearchTerm(event.target.value)
	}

	const filteredProducts = products.filter((product) =>
		Object.values(product).some(
			(value) =>
				typeof value === 'string' &&
				value.toLowerCase().includes(searchTerm.toLowerCase())
		)
	)

	return (
		<MainLayout>
			<h2 className={s.title}>Каталог</h2>
			<Input
				placeholder='Поиск'
				className={s.search}
				value={searchTerm}
				onChange={handleSearch}
			/>
			<ProductGrid products={filteredProducts} />
		</MainLayout>
	)
}

export default Home
