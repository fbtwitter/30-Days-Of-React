const personAccount: {
	firstName: string
	lastName: string
	readonly incomes: number
	expenses: number
	accountInfo: () => string
	totalIncome: () => string
	totalExpenses: () => string
	addIncome: (args: number) => number
	addExpenses: (args: number) => number
	accountBalance: () => string
} = {
	firstName: 'Reza',
	lastName: 'Augusdi',
	incomes: 5_000_000,
	expenses: 3_000_000,
	accountInfo: function () {
		return (
			'Full Name : ' +
			this.firstName +
			' ' +
			this.lastName +
			'\n' +
			'Incomes : ' +
			this.incomes +
			'\n' +
			'Expenses : ' +
			this.expenses +
			'\n'
		)
	},
	totalIncome: function () {
		return `Total income : ${this.incomes}`
	},
	totalExpenses: function () {
		return `Total expense : ${this.expenses}`
	},
	addIncome: function (value) {
		return (this.incomes += value)
	},
	addExpenses: function (value) {
		return (this.expenses += value)
	},
	accountBalance: function () {
		return `Account Balance : ${this.incomes - this.expenses}`
	},
}

personAccount.addIncome(100_000)
personAccount.addExpenses(300_000)
console.log(personAccount.accountInfo())
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpenses())
console.log(personAccount.accountBalance())

const usersInfo: {
	_id: string
	username: string
	email: string
	password: string
	createdAt: string
	isLoggedIn: boolean
}[] = [
	{
		_id: 'ab12ex',
		username: 'Alex',
		email: 'alex@alex.com',
		password: '123123',
		createdAt: '08/01/2020 9:00 AM',
		isLoggedIn: false,
	},
	{
		_id: 'fg12cy',
		username: 'Asab',
		email: 'asab@asab.com',
		password: '123456',
		createdAt: '08/01/2020 9:30 AM',
		isLoggedIn: true,
	},
	{
		_id: 'zwf8md',
		username: 'Brook',
		email: 'brook@brook.com',
		password: '123111',
		createdAt: '08/01/2020 9:45 AM',
		isLoggedIn: true,
	},
	{
		_id: 'eefamr',
		username: 'Martha',
		email: 'martha@martha.com',
		password: '123222',
		createdAt: '08/01/2020 9:50 AM',
		isLoggedIn: false,
	},
	{
		_id: 'ghderc',
		username: 'Thomas',
		email: 'thomas@thomas.com',
		password: '123333',
		createdAt: '08/01/2020 10:00 AM',
		isLoggedIn: false,
	},
]

const products = [
	{
		_id: 'eedfcf',
		name: 'mobile phone',
		description: 'Huawei Honor',
		price: 200,
		ratings: [
			{ userId: 'fg12cy', rate: 5 },
			{ userId: 'zwf8md', rate: 4.5 },
		],
		likes: [],
	},
	{
		_id: 'aegfal',
		name: 'Laptop',
		description: 'MacPro: System Darwin',
		price: 2500,
		ratings: [],
		likes: ['fg12cy'],
	},
	{
		_id: 'hedfcg',
		name: 'TV',
		description: 'Smart TV:Procaster',
		price: 400,
		ratings: [{ userId: 'fg12cy', rate: 5 }],
		likes: ['fg12cy'],
	},
]

// _id, username, email, password
const signUp = (
	id: string,
	username: string,
	email: string,
	password: string
) => {
	if (!id || !username || !email || !password)
		return console.log('Insert all value')

	for (const user of usersInfo) {
		if (user.email === email) return console.log('You already have an acocunt!')
	}

	let createDay = new Date()
	let hours = createDay.getHours()
	let minutes = createDay.getMinutes()
	let amPM = hours >= 12 ? 'PM' : 'AM'
	hours = hours % 12
	return usersInfo.push({
		_id: id,
		username: username,
		email: email,
		password: password,
		createdAt: `${createDay.getMonth()}/${createDay.getDay()}/${createDay.getFullYear()} ${hours}:${minutes} ${amPM}`,
		isLoggedIn: false,
	})
}

signUp('ab12ex', 'reza', 'reza@reza.com', '123456')
console.log(usersInfo)

signUp('ab3214ex', 'reza', 'reza@reza.com', '123456')
console.log(usersInfo)

const signIn = (email: string, password: string) => {
	for (const user of usersInfo) {
		if (user.email === email && user.password === password)
			return (user.isLoggedIn = true)
	}

	return console.log('No any data')
}

signIn('reza@reza.com', '123456')
console.log(usersInfo)
