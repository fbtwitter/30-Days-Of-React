/**
  Arrau Exercise Level 1
**/

let emptyArray = []
console.log('(1).', emptyArray)

let fiveElementArray: string[] = ['one', 'two', 'three', 'four', 'five']
console.log('(2).', fiveElementArray)

let lengthOfArray = fiveElementArray.length
console.log('(3).', lengthOfArray)

let firstItemOfFiveElem = fiveElementArray[0]
console.log(firstItemOfFiveElem)
let middleItemOfFiveElem = fiveElementArray[(fiveElementArray.length - 1) / 2]
console.log(middleItemOfFiveElem)
let lastItemOfFiveElem = fiveElementArray[fiveElementArray.length - 1]
console.log(lastItemOfFiveElem)

console.log(
	`(4). ${firstItemOfFiveElem} ${middleItemOfFiveElem} ${lastItemOfFiveElem}`
)

let mixedDataTypes: any[] = [
	0,
	'zero',
	true,
	{ name: 'Mixed Data Types' },
	['array'],
	null,
	undefined,
]
console.log(`(5). ${mixedDataTypes}`)

let itCompanies: string[] = [
	'Facebook',
	'Google',
	'Microsoft',
	'Apple',
	'IBM',
	'Oracle',
	'Amazon',
]
console.log(`(6 & 7). ${itCompanies}`)

let numberOfCompanies = itCompanies.length
console.log('(8). ' + numberOfCompanies)

let firstItemCompanies = itCompanies[0]
console.log(firstItemCompanies)
let middleItemCompanies = itCompanies[(itCompanies.length - 1) / 2]
console.log(middleItemCompanies)
let lastItemCompanies = itCompanies[itCompanies.length - 1]
console.log(lastItemCompanies)

console.log(
	`(9). ${firstItemCompanies} ${middleItemCompanies} ${lastItemCompanies}`
)

console.log(`(10).`)
for (let index = 0; index < itCompanies.length; index++) {
	console.log(itCompanies[index])
}

console.log(`(11).`)
let newItCompanies: string[] = []
for (let index = 0; index < itCompanies.length; index++) {
	newItCompanies[index] = itCompanies[index].toUpperCase()
}
console.log(newItCompanies)

console.log(
	`(12). ${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, and ${itCompanies[6]} are big IT companies.`
)
console.log(
	`(12). ${itCompanies.slice(0, itCompanies.length - 2).join(', ')}, and ${
		itCompanies[6]
	} are big IT companies.`
)

let itCompaniesExist = itCompanies.indexOf('Amazon')
itCompaniesExist !== -1
	? console.log('(13). ' + itCompanies[itCompaniesExist])
	: console.log('(13). Company is not found')

console.log('(14). Filter')
let itCompaniesWithoutOO: string[] = []
itCompanies.forEach((company) => {
	let check = 0
	company.split('').forEach((item) => {
		if (item.toString() === 'o') {
			check++
		}
	})
	if (check < 2) itCompaniesWithoutOO.push(company)
})

console.log(itCompaniesWithoutOO)

let sortItCompaniesWithoutOO = itCompaniesWithoutOO.sort()
console.log('(15). ' + sortItCompaniesWithoutOO)

let reverseItCompaniesWithoutOO = itCompaniesWithoutOO.reverse()
console.log('(16). ' + reverseItCompaniesWithoutOO)

let getFirstThreeCompanies = itCompaniesWithoutOO.slice(0, 3)
console.log('(17). ' + getFirstThreeCompanies)

let getLastThreeCompanies = itCompaniesWithoutOO.slice(
	itCompaniesWithoutOO.length - 3,
	itCompaniesWithoutOO.length
)
console.log('(18). ' + getLastThreeCompanies)

let getMiddleCompanies = itCompaniesWithoutOO.slice(
	itCompaniesWithoutOO.length / 2,
	itCompaniesWithoutOO.length / 2 + 1
)
console.log('(19). ' + getMiddleCompanies)

let removeFirstItemCompanies = itCompaniesWithoutOO.splice(0, 1)
console.log(removeFirstItemCompanies)
console.log('(20). ' + itCompaniesWithoutOO)

let removeMiddleItemCompanies = itCompaniesWithoutOO.splice(
	itCompaniesWithoutOO.length / 2,
	1
)
console.log(removeMiddleItemCompanies)
console.log('(21). ' + itCompaniesWithoutOO)

let removeLastItemCompanies = itCompaniesWithoutOO.splice(
	itCompaniesWithoutOO.length - 1,
	1
)
console.log(removeMiddleItemCompanies)
console.log('(22). ' + itCompaniesWithoutOO)

let removeAllItemCompanies = itCompaniesWithoutOO.splice(0)
console.log(removeAllItemCompanies)
console.log('(23). ' + itCompaniesWithoutOO)
