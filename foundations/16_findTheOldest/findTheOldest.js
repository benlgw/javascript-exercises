const findTheOldest = function (array) {
	let oldest = null;

	array.forEach((element) => {
		if (!Object.hasOwn(element, "yearOfDeath")) {
			element.yearOfDeath = new Date().getFullYear();
		}
		const age = element.yearOfDeath - element.yearOfBirth;
		element.age = age;
		if (!oldest) {
			oldest = element;
		} else if (age > oldest.age) {
			oldest = element;
		}
	});
	return oldest;
};

const people = [
	{
		name: "Carly",
		yearOfBirth: 1942,
		yearOfDeath: 1970,
	},
	{
		name: "Ray",
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: "Jane",
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
