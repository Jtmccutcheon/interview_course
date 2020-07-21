//--- directions
// given and integer, return an integer that is the reverse
/// ordering of numbers

// --- examples
//     revereseInt(15) === 51
//     revereseInt(981) === 189
//     revereseInt(500) === 5
//     revereseInt(-15) === -51

function reverseInt(n) {
	strNum = n.toString();
	let rev = [...strNum].reverse();
	for (let i = 0; i < rev.length; i++) {
		if (rev[i] === '-') {
			rev.unshift(rev[i]);
			rev.pop();
		}
	}
	return parseInt(rev.join(''));
}

// function reverseInt(n) {
// 	const rev = n.toString().split('').reverse().join('');
// 	if (n < 0) return parseInt(rev) * -1;
// 	return parseInt(rev);
// }

// function reverseInt(n) {
// 	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
// 	const rev = n.toString().split('').reverse().join('');
// 	return parseInt(rev) * Math.sign(n);
// }

module.exports = reverseInt;
