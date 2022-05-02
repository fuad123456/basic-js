const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//   let ar=[]
//   for (let i = 0; i < n.length; i++) {
// 	  if (n[i] !== '-') {
// 		  ar.push(n[i])
// 	  }
// 	  else {
// 		  break;
// 	  }
//   }
//   let str=ar.join('')
//   if (str.length !== 12) {
// 	  return false
//   }
//   for (let i = 0; i < str.length; i++) {
// 	  if (str[i] < '0' || str[i] > '9') {
// 		  if (str[i] < 'A' || str[i] > 'F') {
// 			  return false
// 		  }
// 	  }
//   }
//   return true
}
module.exports = {
  isMAC48Address
};
