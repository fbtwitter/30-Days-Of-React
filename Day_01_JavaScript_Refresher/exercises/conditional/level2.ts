/**
  Conditional Exercise Level 2
**/

// 1. Write a code which can give grades to students according to theirs scores
let scores = 90
const getMark = (scores: number): string => {
	if (scores >= 90 && scores <= 100) return 'A'
	if (scores >= 70 && scores <= 89) return 'B'
	if (scores >= 60 && scores <= 69) return 'C'
	if (scores >= 50 && scores <= 59) return 'D'
	if (scores >= 0 && scores <= 49) return 'F'

	return null
}
console.log('(1). ' + getMark(scores))

// 2. Check if the season is Autumn, Winter, Spring or Summer
let month = 'March'
let checkSeason = (month: string): string | null => {
	if (month === 'September' || month === 'October' || month === 'November')
		return 'The season is Autumn'
	if (month === 'December' || month === 'January' || month === 'February')
		return 'The season is Winter'
	if (month === 'March' || month === 'April' || month === 'May')
		return 'The season is Spring'
	if (month === 'June' || month === 'July' || month === 'August')
		return 'The season is Summer'

	return null
}
console.log('(2). ' + checkSeason(month))

// 3. Check if a day is weekend day or a working day.
let day = 'Sunday'
let checkDay = (day: string): string | null => {
	if (day !== 'Sunday' && day !== 'Saturday') return `${day} is working day`
	if (day !== null) return `${day} is weekend`

	return null
}
console.log('(3). ' + checkDay(day))
