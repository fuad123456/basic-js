const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//   DNS stats
//   should return domains stats:

//  AssertionError: expected { com: 1 } to deeply equal { '.com': 1, '.com.epam': 1 }
//  + expected - actual
	// if (domains.length == 0) {
	// 	return {};
	// }
	// var dnsStats = {};
	// for (var i = 0; i < domains.length; i++) {
	// 	var domain = domains[i];
	// 	var domainParts = domain.split('.');
	// 	var domainPartsCount = domainParts.length;
	// 	for (var j = domainPartsCount - 1; j >= 0; j--) {
	// 		var domainPart = domainParts[j];
	// 		var domainPartWithDot = domainPart + '.';
	// 		if (dnsStats[domainPartWithDot] == undefined) {
	// 			dnsStats[domainPartWithDot] = 1;
	// 		} else {
	// 			dnsStats[domainPartWithDot]++;
	// 		}
	// 	}
	// }
	// return dnsStats;

}

module.exports = {
  getDNSStats
};
