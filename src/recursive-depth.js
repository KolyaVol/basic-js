const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		if (arr.length === 0) {
			return 1;
		}
		const depths = arr
			.filter((item) => Array.isArray(item))
			.map((item) => this.calculateDepth(item));
		const maxDepth = depths.length > 0 ? Math.max(...depths) : 0;

		return maxDepth + (Array.isArray(arr) ? 1 : 0);
	}
}

module.exports = {
	DepthCalculator,
};
