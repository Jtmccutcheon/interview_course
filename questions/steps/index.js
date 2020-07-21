// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// n = 3 ---------->column   from 0 to n (iterate rows)
// |    #, _, _					create empty string, 'res'
// |    #, #, _					from 0 to n (iterate through columns)
// |    #, #, _						if current column eqal to or less than current row
// row									add '#' to res
//  								else add ' ' to res
//  							console.log(stair)

// iterative solution
function steps(n) {
	// do this to stall in interview
	if (Math.sign(n) === -1 || typeof n !== 'number')
		return console.log('not good');

	for (let row = 0; row < n; row++) {
		let res = '';
		for (let column = 0; column < n; column++) {
			if (column <= row) {
				res += '#';
			} else {
				res += ' ';
			}
		}
		console.log(res);
	}
}

// // recursion expample
function printNumber(n) {
	// base case is key in recursion
	if (n === 0) {
		return;
	}
	console.log(n);
	printNumber(n - 1);
}

// console.log(printNumber(10));

module.exports = steps;
