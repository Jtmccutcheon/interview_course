// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
	let arr = [];
	count = 0;
	while (count < n) {
		count++;
		arr.push(count);
		if (count % 5 === 0) {
			arr.pop();
			arr.push('buzz');
		}
		if (count % 3 === 0) {
			arr.pop();
			arr.push('fizz');
		}

		if (count % 5 === 0 && count % 3 === 0) {
			arr.pop();
			arr.push('fizzbuzz');
		}
	}
	for (let res of arr) {
		console.log(res);
	}
}
// fizzBuzz(15);
// function fizzBuzz(n) {
// 	for (let i = 1; i <= n; i++) {
// 		if (i % 3 === 0 && i & (5 === 0)) {
// 			console.log('fizzbuzz');
// 		} else if (i % 3 === 0) {
// 			console.log('fizz');
// 		} else if (i % 5 === 0) {
// 			console.log('buzz');
// 		} else {
// 			console.log(i);
// 		}
// 	}
// }

module.exports = fizzBuzz;
