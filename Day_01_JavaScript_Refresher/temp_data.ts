const arr3: number[] = Array()
console.log(arr3)

const eightEmptyValues: number[] = Array(8)
console.log(eightEmptyValues)

const eightXvalues = Array(8).fill('X')
console.log(eightXvalues)

const eight0values = Array(8).fill(0)
console.log(eight0values)

const four4values = Array(4).fill(4)
console.log(four4values)

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)

const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
const fruitsAndVegetables = fruits.concat(vegetables)
console.log(fruitsAndVegetables)

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length)

console.log(numbers.indexOf(5))
console.log(numbers.indexOf(1))
console.log(numbers.indexOf(3))

console.log(fruits.indexOf('mango'))
console.log(fruits.indexOf('orange'))

let index = fruits.indexOf('banana')

if (index != -1) {
	console.log('This fruit does exist in the array')
} else {
	console.log('This fruit does not exist in the array')
}

index != 1
	? console.log('This fruit does exist in the array')
	: console.log('This fruit does not exist in the array')

let indexOfAvocado = fruits.indexOf('avocado')
console.log(indexOfAvocado)

indexOfAvocado != -1
	? console.log('This fruit does exist in the array')
	: console.log('This fruit does not exist in the array')

const numbersz = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbersz.lastIndexOf(1))

console.log(numbersz.includes(2))

const numberss = [1, 2, 3, 4, 5]
console.log(Array.isArray(numberss))

console.log(Array.isArray(index))

console.log(numbers.toString())

const names = ['Asabeneh', 'Mathias', 'Ellias', 'Brook']
console.log(names.toString())

console.log(numberss.join())
let a = numberss.join()
console.log(names.join())

console.log(numberss.slice(0, numberss.length))
let v = numberss.splice(1, 3)
console.log(numberss)

let c = numberss.splice(3, 3, 7, 8, 9, 10)
console.log(c)

console.log(numberss)

let d = numberss.pop()
console.log(numberss)

numberss.unshift(0)
console.log(numberss)
numberss.reverse()
console.log(numberss)

names.sort().reverse()
console.log(names)

const fruitss = [
	'apple',
	'apple',
	'banana',
	'banana',
	'orange',
	'pear',
	'apple',
]
const tally = fruitss.reduce((acc, curr) => {
	acc[curr] ? (acc[curr] = acc[curr] + 1) : (acc[curr] = 1)
	return acc
}, {})

console.log(tally)

const arrayu = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
]

const flattened = arrayu.reduce(
	(accumulator, item) => [...accumulator, ...item],
	[]
)
console.log(flattened)

let getDaysInMonth = (months: number, year: number): number => {
	return new Date(year, months, 0).getDate()
}

console.log(getDaysInMonth(2, 1700))

const nums = [1, 2, 3, 4, 5]
const lastIndex = nums.length - 1
const newArray = []
for (let i = lastIndex; i >= 0; i--) {
	newArray.push(nums[i])
}
console.log(newArray)

let count = 5
while (count > 0) {
	console.log(count)
	count--
}

console.log(count)

do {
	console.log(count)
	count++
} while (count < 11)

do {
	console.log(count)
	count++
} while (count < 11)

const numbersss = [1, 2, 3, 4, 5]
for (const number of numbersss) {
	console.log(number)
}

const countriess: string[] = [
	'Finland',
	'Sweenden',
	'Norway',
	'Denmark',
	'Iceland',
]
countriess.forEach((country, i, arr) => {
	console.log(i, country.toUpperCase())
	console.log(arr[i].toUpperCase())
})

const user = {
	firstName: 'Reza',
	lastName: 'Augusdi',
	age: 23,
	country: 'Indonesia',
	skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
}

for (const key in user) {
	console.log(key, user[key])
}

for (let i = 0; i <= 5; i++) {
	if (i === 3) break

	console.log(i)
}

for (let i = 0; i <= 5; i++) {
	if (i === 3) continue

	console.log(i)
}

let ax = 'Javascript'
let bx = 10

function letsLearnScope() {
	console.log(ax, bx)
	let cx = 30
	if (true) {
		let ax = 'Python'
		let bx = 100
		let dx = 40
		console.log(ax, bx, cx)
	}

	console.log(ax, bx)
}
letsLearnScope()
console.log(ax, bx)

function letsLearnScope2() {
	var gravity = 9.81
	console.log(gravity)
}
// console.log(gravity);

// if (true) {
//   var gravity = 9.81
//   console.log(gravity);
// }
// console.log(gravity);

// for (var i = 0; i < 3; i++){
//   console.log(i);

// }
// console.log(i);
const gravity = 9.81
function letsLearnScope3() {
	// const gravity = 9.81
	console.log(gravity)
}
letsLearnScope3()
// console.log(gravity);

if (true) {
	// const gravity = 9.81
	console.log(gravity)
}
// console.log(gravity);

for (let i = 0; i < 3; i++) {
	console.log(i)
}

// console.log(i);

const person: {
	firstName: string
	lastName: string
	age: number
	country: string
	skills: string[]
	getFullName: () => string
	'phone number': number
	nationality?: string
	title?: string
	isMarried?: boolean
	getPersonInfo?: () => string
	address: {}
} = {
	firstName: 'Reza',
	lastName: 'Augusdi',
	age: 23,
	country: 'Indonesia',
	skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
	getFullName: function () {
		return `${this.firstName} ${this.lastName}`
	},
	'phone number': 082313216454,
	address: {
		street: 'Heitamienkatu 16',
		pobox: 2002,
		city: 'Helsinki',
	},
	getPersonInfo: function () {
		return `I am ${this.firstName} and I live in ${this.address.city}, ${this.country}. I am ${this.age}.`
	},
}

console.log(person['phone number'])

console.log(person.firstName)
console.log(person.lastName)
console.log(person.getFullName())

person.nationality = 'Indonesian'
person.country = 'Japan'
person.title = 'Student'
person.skills.push('Typescript')
person.skills.push('Sass')
person.isMarried = true

console.log(person.nationality)
console.log(person.country)
console.log(person.isMarried)
console.log(person.skills)

person.getPersonInfo = function () {
	let skillsWithoutLastSkill = this.skills
		.slice(0, this.skills.length - 1)
		.join(', ')
	let lastSkill = this.skills.slice(this.skills.length - 1)[0]
	let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`

	let fullname = this.getFullName()
	let statement = `${fullname} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`

	return statement
}

console.log(person)
console.log(person.getPersonInfo())

const copyPerson = Object.assign({}, person)
console.log(copyPerson)

const keys = Object.keys(copyPerson)
console.log(keys)

const address = Object.keys(copyPerson.address)
console.log(address)

const values = Object.values(copyPerson)
console.log(values)

const entries = Object.entries(copyPerson)
console.log(entries)
