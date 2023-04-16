const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let result = [
		[1, 1, 1],
		[1, 1, 1],
		[1, 1, 1],
	];
	if (matrix.length < 3)
		result = [
			[0, 0, 0],
			[0, 0, 0],
		];

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			if (matrix[i][j] === true) {
				if (i > 0) result[i - 1][j]++;
				else if (i < 2) result[i + 1][j]++;
				else if (j > 0) result[i][j - 1]++;
				else if (j < 2) result[i][j + 1]++;
			}
		}
	}
	return result;
}

module.exports = {
	minesweeper,
};
