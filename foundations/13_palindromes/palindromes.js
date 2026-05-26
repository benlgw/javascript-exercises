const palindromes = function (string) {
	const palindrome = string
		.toLowerCase()
		.replaceAll(/[^a-z0-9]+/gi, "")
		.split("")
		.reverse()
		.join("");

	if (
		palindrome ==
		string
			.toLowerCase()
			.replaceAll(/[^a-z0-9]+/gi, "")
			.split("")
			.join("")
	) {
		return true;
	} else {
		return false;
	}
};

palindromes("ZZZZ car, a man, a maracaz.");

// Do not edit below this line
module.exports = palindromes;
