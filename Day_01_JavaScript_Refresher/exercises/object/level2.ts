interface looseObject {
	[key: string]: {
		email: string
		skills: string[]
		age: number
		isLoggedIn: boolean
		points: number
	}
}

const users: looseObject = {
	Alex: {
		email: 'alex@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript'],
		age: 20,
		isLoggedIn: false,
		points: 30,
	},
	Asab: {
		email: 'asab@asab.com',
		skills: [
			'HTML',
			'CSS',
			'JavaScript',
			'Redux',
			'MongoDB',
			'Express',
			'React',
			'Node',
		],
		age: 25,
		isLoggedIn: false,
		points: 50,
	},
	Brook: {
		email: 'daniel@daniel.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
		age: 30,
		isLoggedIn: true,
		points: 50,
	},
	Daniel: {
		email: 'daniel@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	John: {
		email: 'john@john.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
		age: 20,
		isLoggedIn: true,
		points: 50,
	},
	Thomas: {
		email: 'thomas@thomas.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React'],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	Paul: {
		email: 'paul@paul.com',
		skills: [
			'HTML',
			'CSS',
			'JavaScript',
			'MongoDB',
			'Express',
			'React',
			'Node',
		],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
}

const userValue = Object.entries(users)

let personSkills = userValue[0][1].skills.length
let personName = null
for (const key in userValue) {
	if (userValue[key][1].skills.length >= personSkills) {
		personSkills = userValue[key][1].skills.length
		personName = userValue[key][0]
	}
}
console.log(personName)

for (const key in users) {
	if (users[key].points >= 50) {
		console.log(key)
	}
}

let personMern = []
for (const key in userValue) {
	let skillCount: number = 0
	const mern = userValue[key][1].skills.some((element) => {
		if (element === 'React') skillCount++
		if (element === 'MongoDB') skillCount++
		if (element === 'Express') skillCount++
		if (element === 'Node' || element === 'Node.js') skillCount++

		return skillCount === 4 ? true : false
	})

	if (mern) personMern.push((personName = userValue[key][0]))
}

console.log(personMern)

const Reza = {
	email: 'reza@reza.com',
	skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
	age: 23,
	isLoggedIn: false,
	points: 80,
}

users.Reza = Reza

console.log(users)

console.log(Object.keys(users))
console.log(Object.values(users))

for (const key in users) {
	console.log(key)
	console.log(users[key].email)
	console.log(users[key].skills)
	console.log(users[key].age)
	console.log(users[key].isLoggedIn)
	console.log(users[key].points)
}

const newCountries: {
	name: string
	capital: string
	populations: number
	languages: string
	getCountryInfo: () => void
} = {
	name: 'Indonesia',
	capital: 'Jakarta',
	populations: 279_028_783,
	languages: 'Indonesia',
	getCountryInfo: function () {
		return `${this.name} capital city is ${this.capital} has ${this.populations} population and use ${this.languages} languages`
	},
}
console.log(newCountries.getCountryInfo())
