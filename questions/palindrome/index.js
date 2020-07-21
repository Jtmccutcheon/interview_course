// --- directions
// given a string return true if the string is a palindrome
// or false if it is not. Palindromes are strings that
// form the same word if it is rerversed. DO include space
// and puncuation in determining if the string is a palindrome
// --- examples
// palindrome('abba') === true 'abba'
// palindrome('abcdefg') === false

function palindrome(str) {
	let rev = [...str].reverse().join('');
	return rev === str;
}

// function palindrome(str) {
// 	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// 	return str.split('').every((char, i) => {
// 		return char === str[str.length - i - 1];
// 	});
// }

module.exports = palindrome;
