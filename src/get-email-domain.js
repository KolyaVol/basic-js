const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
	let domain = email.split("@").splice(-1, 1).join("");
	if (domain[0] === '.') {
		return domain
			.split("")
			.splice(1, domain.length - 1)
			.join("");
	}
	return domain;
}

module.exports = {
	getEmailDomain,
};
