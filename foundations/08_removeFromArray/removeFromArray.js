const removeFromArray = function (array, ...args) {
	// ...args gives a list of arguments
	const newArray = [];
	array.forEach((element) => {
		// Loop for each element in array
		if (!args.includes(element)) {
			// Checks if element is not in ...args list.
			newArray.push(element);
		}
	});
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
