// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
	return array.slice(0,2)
}

const returnLastTwoDrivers = function(array) {
	return array.slice(-2)
}

const selectingDrivers = []
selectingDrivers.push(returnFirstTwoDrivers)
selectingDrivers.push(returnLastTwoDrivers)

const createFareMultiplier = function (multiplier) {
	return function(value) {return value*multiplier}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, func) {
	return func(arrayOfDrivers)
}