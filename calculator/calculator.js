function add (first, second) {
	return first + second;
}

function subtract (first , second) {
	return first - second;
}

function sum (numbers) {
	let result = 0;
	for (let i = 0; i < numbers.length; i++ ) {
		result += numbers[i]
	}
	return result;
}

function multiply (numbers) {
	let result = 1;
	for ( let i = 0; i < numbers.length; i++ ) {
		result *= numbers[i];
	}
	return result;
}

function power(number, power) {
	let result = 1;
	for ( let i = 0; i < power; i++ ) {
		result *= number;
	}
	return result;
}

function factorial(number) {
	let result = 1;
	for ( let i = 1; i <= number; i++) {
		result *= i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}