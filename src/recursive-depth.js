const { NotImplementedError } = require('../extensions/index.js');

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

//  Your task is to implement the class DepthCalculator with method calculateDepth that takes an array and returns its depth.

//  calculateDepth method must pass the given array recursively. Depth of a flat array is 1. Method must correctly work with arrays that contain no elements or contain empty arrays.
 
//  For example:
 
//  const depthCalc = new DepthCalculator();
 
//  depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 
//  depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 
//  depthCalc.calculateDepth([[[]]]) => 3
class DepthCalculator {
  calculateDepth( arr ) {
    let c= 1;
    let max = 0;
    for (const item of arr) {
      if (Array.isArray(item)) {
        max = Math.max(this.calculateDepth(item), max);
      }
    }
    return c + max;


    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  }
}

module.exports = {
  DepthCalculator
};
