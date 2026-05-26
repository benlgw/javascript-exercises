const fibonacci = function (num) {
	const fib = [0, 1];
	let result = 0;

	if (num == 0) {
		return 0;
	} else if (num < 0) {
		return "OOPS";
	}

	for (i = 1; i < num; i++) {
		fib.push(fib[i] + fib[i - 1]);
	}
	// console.log(fib);
	return fib.pop();
};

console.log(fibonacci(0));

// Do not edit below this line
module.exports = fibonacci;
