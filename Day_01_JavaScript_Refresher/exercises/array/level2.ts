/**
  Arrau Exercise Level 2
**/

import { countries, webTechs } from './main'

let text =
	'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[,.]/g, '').split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// Add Shopping Cart
shoppingCart.indexOf('Meat') !== -1
	? console.log('This item does exist in the array')
	: shoppingCart.unshift('Meat')

shoppingCart.indexOf('Sugar') !== -1
	? console.log('This item does exist in the array')
	: shoppingCart.push('Sugar')

console.log(shoppingCart)

// With Filter
// let newShoppingCartFilter = shoppingCart.filter((item) => item !== 'Honey')
// console.log(newShoppingCartFilter);

// Without Filter
let newShoppingCart = []
shoppingCart.forEach((item, index) => {
	item === 'Honey' ? '' : newShoppingCart.push(item)
})
console.log(newShoppingCart)

let editShoppingCart = []
newShoppingCart.map((item, index) => {
	item === 'Tea' ? (newShoppingCart[index] = 'Green Tea') : ''
})
console.log(newShoppingCart)

countries.indexOf('Ethiopia') !== -1
	? console.log('ETHIOPIA')
	: countries.push('Ethiopia')

webTechs.indexOf('Sass') !== -1
	? console.log('Sass is a CSS preporcess')
	: webTechs.push('Sass')

console.log(webTechs)

const frontEnd: string[] = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd: string[] = ['Node', 'Express', 'MongoDB']

const fullstack: string[] = frontEnd.concat(backEnd)
console.log(fullstack)
