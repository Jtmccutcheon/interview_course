// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// good article on this problem https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/array-chunking

// function chunk(array, size) {
// 	let res = [];

// 	for (value of array) {
// 		let lastArray = res[res.length - 1];
// 		if (!lastArray || lastArray.length == size) {
// 			res.push([value]);
// 		} else {
// 			lastArray.push(value);
// 		}
// 	}

// 	return res;
// }

// function chunk(array, size) {
// 	let res = [];
// 	let temp = [...array];
// 	while (temp.length > 0) {
// 		res.push(temp.splice(0, size));
// 	}

// 	return res;
// }

// function chunk(array, size) {
// 	let res = [];

// 	for (let i = 0; i < array.length; i += size) {
// 		let chunk = array.slice(i, i + size);
// 		res.push(chunk);
// 	}

// 	return res;
// }

// function chunk(array, size) {
// 	if (array.length <= size) {
// 		return [array];
// 	}
// 	return [array.slice(0, size), ...chunk(array.slice(size), size)];
// }

// function chunk(array, size) {
// 	let chunked = [];
// 	for (let ele of array) {
// 		let last = chunked[chunked.length - 1];

// 		if (!last || last.length === size) {
// 			chunked.push([ele]);
// 		} else {
// 			last.push(ele);
// 		}
// 	}
// 	return chunked;
// }

function chunk(array, size) {
	// create empty chuncked array
	let chunked = [];
	// create index at 0
	let index = 0;
	// while index is lesss than array.length
	while (index < array.length) {
		//     push a slice of length of size from array into chunked
		chunked.push(array.slice(index, index + size));
		//     add size to index
		index += size;
	}
	return chunked;
}
module.exports = chunk;
