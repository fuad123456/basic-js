const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit( n ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//   Delete digit
//        should return the maximal number you can obtain by deleting exactly one digit of the given number:
	// let str = n.toString();
	// let arr = str.split('');
	// let max = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	let temp = arr.slice(0, i).concat(arr.slice(i + 1));
	// 	let num = parseInt(temp.join(''));
	// 	if (num > max) {
	// 		max = num;
	// 	}
	// }
	// return max;
}

module.exports = {
  deleteDigit
};
