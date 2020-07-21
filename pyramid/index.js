// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//  pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'
// function pyramid(n) {
// 	// # of #'s in each row is every iteratation * 2 + 1

// 	let baseLength = (n - 1) * 2 + 1;
// 	let arr = [];
// 	while (n--) {
// 		let symbols = n * 2 + 1;
// 		let str = '';
// 		for (let i = 0; i < symbols; i++) {
// 			str += '#';
// 		}
// 		let whiteSpace = baseLength - symbols;
// 		while (whiteSpace != 0) {
// 			str = str + ' ';
// 			str = ' ' + str;
// 			whiteSpace -= 2;
// 		}
// 		arr.push(str);
// 	}

// 	arr.reverse();
// 	arr.forEach((thing) => {
// 		console.log(thing);
// 	});
// }

// console.log(pyramid(4));

// function pyramid(n) {
// 	// # of #'s in each row is every iteratation * 2 + 1

// 	let midpoint = Math.floor((2 * n - 1) / 2);
// 	for (let row = 0; row < n; row++) {
// 		let level = '';

// 		for (let column = 0; column < 2 * n - 1; column++) {
// 			if (midpoint - row <= column && midpoint + row >= column) {
// 				level += '#';
// 			} else {
// 				level += ' ';
// 			}
// 		}
// 		console.log(level);
// 	}
// }

function pyramid(n, row = 0, level = '') {
	// # of #'s in each row is every iteratation * 2 + 1
	if (row === n) {
		return;
	}

	if (level.length === 2 * n - 1) {
		console.log(level);
		return pyramid(n, row + 1);
	}

	let midpoint = Math.floor((2 * n - 1) / 2);

	let add;

	if (midpoint - row <= level.length && midpoint + row >= level.length) {
		add = '#';
	} else {
		add = ' ';
	}
	pyramid(n, row, level + add);
}

module.exports = pyramid;
