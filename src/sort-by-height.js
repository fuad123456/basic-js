const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
//   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return [];
  let n=arr
  let res=[]
  for (let i=0; i<n.length; i++) {
	  if (n[i]!==-1){
		  res.push(n[i])
	  }

  }
  for (let i=0; i<n.length; i++) {
	  if (n[i]!==-1){
		  delete n[i] 
	  }
	}
	console.log(n);
	res.sort((a,b)=>a-b)
	for (let i=0; i<n.length; i++) {
		for(let j=0; j<res.length; j++){
			if(n[i]===undefined){
				n[i]=res[j]
				res.splice(j,1)
				break
			}
		}
	}
  return n;
}

module.exports = {
  sortByHeight
};
