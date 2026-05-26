const getTheTitles = function (array) {
	const titles = [];

	array.forEach((element) => {
		titles.push(element.title);
	});
	return titles;

	// Advanced method using array.map(). .map() returns an array with the results of calling a function on each element
	// return array.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
