// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
// 	let bArr = [...stringB.replace(/[^w]/g, '').toLowerCasetoLowerCase()];
// 	let aArr = [...stringA.replace(/[^w]/g, '').toLowerCase()];

// 	let obj = {};

// 	for (let char of bArr) {
// 		if (!obj[char]) obj[char] = 0;
// 		obj[char] += 1;
// 	}

// 	for (let match of aArr) {
// 		if (!obj[match]) obj[match] = 0;
// 		obj[match] += 1;
// 	}

// 	for (val in obj) {
// 		if (obj[val] % 2 !== 0) return false;
// 	}
// 	return true;
// }

// console.log(anagrams('rail safety', 'fairy tales'));

// // helper function
// function buildCharMap(str) {
// 	const charMap = {};

// 	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
// 		if (charMap[char]) charMap[char] += 1;
// 		charMap[char] = 1;
// 	}

// 	return charMap;
// }

// function anagrams(stringA, stringB) {
// 	const aCharMap = buildCharMap(stringA);
// 	const bCharMap = buildCharMap(stringB);

// 	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
// 		return false;

// 	for (let char in aCharMap) {
// 		if (aCharMap[char] !== bCharMap[char]) return false;
// 	}

// 	return true;
// }

// console.log(anagrams('One one', 'One one c'));

function anagrams(stringA, stringB) {
	// boolean return
	return cleanStr(stringA) === cleanStr(stringB);
}

function cleanStr(str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
