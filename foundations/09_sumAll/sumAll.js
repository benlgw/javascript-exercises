const sumAll = function (num1, num2) {
	const nums = [];
	nums.push(num1, num2);

	for (const element of nums) {
		if (isNaN(element) || !Number.isInteger(element) || element < 0) {
			return "ERROR";
		}
	}

	let min = Math.min(...nums);
	let max = Math.max(...nums);

	let sum = 0;

	for (; min <= max; min++) {
		sum += min;
	}
	return sum;
};

console.log(sumAll(-10, 4));

// Do not edit below this line
module.exports = sumAll;
