/**
  Conditional Exercise Level 3
**/

// 1. Write a program which tells the number of days in a month, now consider leap year.
let dayInMonth: string = 'February'.toLowerCase()
let year: number = 2000

switch (dayInMonth) {
	case 'february':
		let leapYear = false
		if (year % 100 === 0 && year % 400 === 0) leapYear = true
		if (year % 100 !== 0 && year % 4 == 0) leapYear = true

		if (leapYear) {
			console.log(
				`${
					dayInMonth.charAt(0).toUpperCase() + dayInMonth.slice(1)
				} has 29 days.`
			)
			console.log(`${year} is leap year`)
		} else {
			console.log(
				`${
					dayInMonth.charAt(0).toUpperCase() + dayInMonth.slice(1)
				} has 29 days.`
			)
			console.log(`${year} is not leap year`)
		}
		break
	case 'january':
	case 'march':
	case 'may':
	case 'july':
	case 'august':
	case 'october':
	case 'december':
		console.log(
			`${dayInMonth.charAt(0).toUpperCase() + dayInMonth.slice(1)} has 31 days.`
		)
		break
	case 'april':
	case 'june':
	case 'september':
	case 'november':
		console.log(
			`${dayInMonth.charAt(0).toUpperCase() + dayInMonth.slice(1)} has 30 days.`
		)
		break
	default:
		break
}
