const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	if (typeof s1 != "string" || typeof s2 != "string") {
		return false;
	}

	let s1Chars = s1.split("");
	let s2Chars = s2.split("");

	let s1CharsFiltered = s1Chars.filter((i) => s2Chars.includes(i)).sort();
	let s2CharsFiltered = s2Chars.filter((i) => s1Chars.includes(i)).sort();
	let count = Math.min(s1CharsFiltered.length, s2CharsFiltered.length);
	for (let i = 0; i < s1CharsFiltered.length; i++) {
		if (s1CharsFiltered.length === s2CharsFiltered.length) {
			if (s1CharsFiltered[i] != s2CharsFiltered[i]) {
				count--;
			}
		}
	}
	return count;
}

module.exports = {
	getCommonCharacterCount,
};
