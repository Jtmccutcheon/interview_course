// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- examples
// reverse('apple') === 'elppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sngiteerG'

// function reverse(str) {
// 	let arr = [];
// 	for (let index = str.length - 1; index !== -1; index--) {
// 		const element = str[index];
// 		arr.push(element);
// 	}
// 	return arr.join('');
// }

// function reverse(str) {
// 	return str.split('').reverse().join('');
// }

// const reverse = (str) => [...str].reverse().join('');

function reverse(str) {
	debugger;
	let reversed = '';

	for (let char of str) {
		reversed = char + reversed;
	}
	return reversed;
}
reverse('asdf');

// console.log(reverse('hello'));

// function reverse(str) {
// 	return str
// 		.split('')
// 		.reduce((reversed, character) => character + reversed, '');
// }

module.exports = reverse;
