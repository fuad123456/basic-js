const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
//  ['--discard-prev', 1, 2, 3],
//  ['--double-prev', 1, 2, 3],
//  [1, 2, 3, '--double-next'],
//  [1, 2, 3, '--discard-next']
function transform( arr ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//   if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
//   if (arr.length === 0) return [];
//   let n=arr
//   let res=[]
//   if(arr[0]==='--discard-prev' || arr[arr.length-1]==='--discard-next' || arr[0]==='--double-prev' || arr[arr.length-1]==='--double-next'){
// 	  for (let i= 0; i < arr.length; i++) {
// 		  if(typeof arr[i]==='number'){
// 			  res.push(arr[i])
// 		  }
// 	  }
//   }else{
// 	for (let i=0; i<n.length; i++) {
// 		if(n[i]==='--double-prev'){
// 		  res.push(n[i-1])
// 		}
// 		else if(n[i]==='--double-next'){
// 		  res.push(n[i+1])
// 		}
// 		else if(n[i]==='--discard-next'){
// 		  continue
// 		}
// 		else if(n[i]==='--discard-prev'){
// 		  res.pop()
// 		}
// 		else{
// 			res.push(n[i])
// 		}
// 	}
//   }
// return res;
}

module.exports = {
  transform
};
