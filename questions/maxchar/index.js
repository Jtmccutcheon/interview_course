// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
// 	let arr = [...str];
// 	let obj = {};
// 	let largest = 0;
// 	let maxVal;
// 	for (let char in arr) {
// 		if (!obj[arr[char]]) obj[arr[char]] = 0;
// 		obj[arr[char]]++;
// 		if (obj[arr[char]] > largest) {
// 			largest = obj[arr[char]];
// 			maxVal = arr[char];
// 		}
// 	}
// 	return maxVal;
// }

function maxChar(str) {
	const charMap = {};
	let max = 0;
	let maxChar = '';

	for (let char of str) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	for (char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}
	return maxChar;
}

// maxChar('apple 1231111');

module.exports = maxChar;
