import product1 from './assets/product-1.jpg'
import product2 from './assets/product-2.jpg'
import product3 from './assets/product-3.jpg'
import product4 from './assets/product-4.jpg'
import product5 from './assets/product-5.jpg'

export const products = [
	{
		id: 1,
		name: 'Чарли',
		breed: 'Африканский серый',
		gender: 'Мужской',
		color: 'Серый',
		attributes: ['Клетка', 'Корм'],
		image: product1
	},
	{
		id: 2,
		name: 'Полли',
		breed: 'Амазонка',
		gender: 'Женский',
		color: 'Зеленый',
		attributes: ['Клетка'],
		image: product2
	},
	{
		id: 3,
		name: 'Макс',
		breed: 'Какаду',
		gender: 'Мужской',
		color: 'Белый',
		attributes: ['Клетка'],
		image: product3
	},
	{
		id: 4,
		name: 'Лола',
		breed: 'Корелла',
		gender: 'Женский',
		color: 'Розовый',
		attributes: ['Клетка'],
		image: product4
	},
	{
		id: 5,
		name: 'Рики',
		breed: 'Какаду',
		gender: 'Мужской',
		color: 'Желтый',
		attributes: ['Клетка'],
		image: product5
	}
]

export const allRes = [
	{
		id: 1,
		name: 'Чарли',
		breed: 'Африканский серый',
		gender: 'Мужской',
		color: 'Серый',
		attributes: ['Клетка', 'Корм'],
		image: product1,
		status: 'Отказ'
	},
	{
		id: 2,
		name: 'Полли',
		breed: 'Амазонка',
		gender: 'Женский',
		color: 'Зеленый',
		attributes: ['Клетка'],
		image: product2,
		status: 'Принято'
	}
]
