const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (str.length === 0) {
	return '';
}
let result='';
let str1=str
let c=1
for (let i=0; i<str1.length; i++) {

  if (str1[i]==str1[i+1]) {
  c++;
  }

  else if(str1[i]!==str1[i+1]){
	  result+=c
	  result+=str1[i];
	c=1
  }
}
return  result.split('1').join('');

}

module.exports = {
  encodeLine,
};
