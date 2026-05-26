const add = function (arg1, arg2) {
	return arg1 + arg2;
};

const subtract = function (arg1, arg2) {
	return arg1 - arg2;
};

const sum = function (array) {
	let sum = 0;
	array.forEach((element) => {
		sum += element;
	});
	return sum;
};

const multiply = function (array) {
	let sum = 1;
	array.forEach((element) => {
		sum *= element;
	});
	return sum;
};

const power = function (base, exponent) {
	return base ** exponent;
};

const factorial = function (num) {
	let sum = 1;
	for (let i = 1; i <= num; i++) {
		sum *= i;
	}
	return sum;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
