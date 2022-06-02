/**
  Conditional Exercise Level 1
**/

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Enter your age
let userInput: number = 29
if (userInput >= 18) {
	console.log('(1). You are old enough to drive')
} else {
	console.log(
		`(1). You are left with ${Math.abs(userInput - 18)} years to drive`
	)
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age
let yourAge: number = 30
let myAge: number = 23
if (yourAge > myAge) {
	console.log(`(2). You are ${yourAge - myAge} years older than me`)
} else if (yourAge === myAge) {
	console.log(`(2). You are same age with me`)
} else {
	console.log(`(2). You are ${Math.abs(yourAge - myAge)} years younger than me`)
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
// using if else
// ternary operator.
// Enter aa and bb
let aa: number = 4
let bb: number = 3
aa > bb
	? console.log(`(3). ${aa} is greater than ${bb}`)
	: console.log(`(3). ${aa} is less than ${bb}`)

if (aa > bb) {
	console.log(`(3). ${aa} is greater than ${bb}`)
} else {
	console.log(`(3). ${aa} is less than ${bb}`)
}

// 4. Even numbers are divisible by 2 and the remainder is zero
// Enter your number
let checkNumber: number = 5
checkNumber % 2 === 0
	? console.log(`(4). ${checkNumber} is an even number`)
	: console.log(`(4). ${checkNumber} is an odd number`)
