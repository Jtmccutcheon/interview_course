// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
// 	// make empty arr words
// 	let words = [];
// 	// split the input string by spaces to get an array
// 	let arr = str.split(' ');
// 	// for each word in the array
// 	arr.forEach((element) => {
// 		// // uppercase the first letter of the wrod
// 		// // jooin t he first letter with the rest of the string
// 		// // push result into words array
// 		words.push(element[0].toUpperCase() + element.slice(1));
// 	});

// 	// // join words and return
// 	return words.join(' ');
// }

function capitalize(str) {
	// create empty res string
	let res = str[0].toUpperCase(); // better than empty because it covers base case
	// for each char
	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === ' ') {
			// if char -1 is a space
			// capitalize and add to resut
			res += str[i].toUpperCase();
		} else {
			// add to 'result'
			res += str[i];
		}
	}

	return res;
}

// capitalize('look, it is working!');

module.exports = capitalize;
