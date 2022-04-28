const { NotImplementedError } = require('../extensions/index.js');

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
//  Your task is to implement function that accepts two strings (s1 and s2) and returns number of common characters between them.
//  For example:
//  getCommonCharacterCount('aabcc', 'adcaa') => 3
// //  Write your code in src/common-character-count.js.
// Common character count
//        should return the number of common characters between the given strings:
function getCommonCharacterCount( s1, s2 ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//   let result=''
//   ar1 = s1.split('');
//   ar2 = s2.split('');
  
//   ar1.forEach(function(char) {
// 	if (ar2.includes(char)) {
// 	  result += char;
// 	  ar2.splice(ar2.indexOf(char), 1);
// 	}
//   });
//   return result.length;
}

module.exports = {
  getCommonCharacterCount
};
