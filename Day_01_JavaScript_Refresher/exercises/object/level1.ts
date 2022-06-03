const dog: {
	name?: string
	legs?: number
	color?: string
	age?: number
	bark?: () => void
	breed?: boolean
	getDogInfo?: () => void
} = {
	name: 'Bron',
	legs: 4,
	age: 6,
	color: 'white',
	bark: () => {
		return 'woof woof'
	},
}
console.log(dog)

console.log(dog.name)
console.log(dog.legs)
console.log(dog.age)
console.log(dog.color)
console.log(dog.bark())

dog.breed = false
dog.getDogInfo = function () {
	return `${this.name} is a dog. he is ${this.age} years old. He has ${
		this.legs
	} legs, ${this.color} color, the barks sounds ${this.bark()}. he ${
		this.bark ? 'can' : 'can not'
	} breed.`
}

console.log(dog.getDogInfo())
