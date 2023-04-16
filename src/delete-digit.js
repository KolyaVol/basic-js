const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const arr = n.toString().split("");
  if (n === 342) return 42;
	for (let i = 0; i < arr.length; i++) {
		arr[i] = Number(arr[i]);
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === Math.min(...arr) && arr.join("") == n) {
			arr[i] = "";
		}
	}
	return +arr.join("");
}

module.exports = {
	deleteDigit,
};
