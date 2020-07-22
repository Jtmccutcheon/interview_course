// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//      start column      end column                create empty arr of arrays called res
//              [ 1 , 2 , 3 ] start row             counter starting at 1
//              [ 8 , 9 , 4 ]                       as long as (start column <= end column) AND (start row <= end row)
//              [ 7 , 6 , 5 ] end row                   loop from start col to end col
//                                                          at arr[start_row][i] assign counter vari
//                                                          increment counter
//                                                      increment start_row
//                                                      loop from start row to end row
//                                                          at arr[i][end_column] assign counter vari
//                                                          increment counter
//                                                      decrement end row
//                                                      ... repeat for two sides

function matrix(n) {
	// create empty arr of arrays called res
	let results = [];
	for (let i = 0; i < n; i++) {
		results.push([]);
	}
	// counter starting at 1
	let counter = 1;

	startRow = 0;
	startColumn = 0;
	endRow = n - 1;
	endColumn = n - 1;
	// as long as (start column <= end column) AND (start row <= end row)
	while (startColumn <= endColumn && startRow <= endRow) {
		// top row loop from start col to end col
		for (let i = startColumn; i <= endColumn; i++) {
			// at arr[start_row][i] assign counter vari
			results[startRow][i] = counter;
			// increment counter
			counter++;
		}
		// increment start_row
		startRow++;

		// right column
		for (let i = startRow; i <= endRow; i++) {
			results[i][endColumn] = counter;
			counter++;
		}

		endColumn--;

		// bottom row
		for (let i = endColumn; i >= startColumn; i--) {
			results[endRow][i] = counter;
			counter++;
		}
		endRow--;

		// start column
		for (let i = endRow; i >= startRow; i--) {
			results[i][startColumn] = counter;
			counter++;
		}
		startColumn++;
	}

	return results;
}

console.log(matrix(4));

module.exports = matrix;
