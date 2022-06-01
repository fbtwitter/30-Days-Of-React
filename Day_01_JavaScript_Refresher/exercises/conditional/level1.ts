/**
  Conditional Exercise Level 1
**/

// Enter your age
let userInput: number = 29
if (userInput >= 18) {
	console.log('(1). You are old enough to drive')
} else {
	console.log(
		`(1). You are left with ${Math.abs(userInput - 18)} years to drive`
	)
}

// Enter your age
let yourAge: number = 30
if (yourAge > 23) {
	console.log(`(2). You are ${yourAge - 23} years older than me`)
} else if (yourAge === 23) {
	console.log(`(2). You are same age with me`)
} else {
	console.log(`(2). You are ${Math.abs(yourAge - 23)} years younger than me`)
}

// Enter aa and bb
let aa: number = 4
let bb: number = 3
aa > bb
	? console.log(`(3). ${aa} is greater than ${bb}`)
	: console.log(`(3). ${aa} is less than ${bb}`)

// Enter your number
let checkNumber: number = 5
checkNumber % 2 === 0
	? console.log(`(4). ${checkNumber} is an even number`)
	: console.log(`(4). ${checkNumber} is an odd number`)
