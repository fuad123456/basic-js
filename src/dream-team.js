const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

//  Imagine you and your friends decide to create a dream team. This team should have a cool secret name that contains encrypted information about it. For example, these may be the first letters of the names of its members in upper case sorted alphabetically. Your task is to implement the createDreamTeam(members) function that returns name of a newly made team (string) based on the names of its members (Array). Good luck!

//  Names of the members should be strings. Values with other type should be ignored. In case of wrong members type function must return false.
 
//  NB! Team member name may contain whitespaces.
 
//  For example:
 
//  createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 
//  createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
// 4) should handle whitespaces
//       ✔ should handle lowercase
//       5) should return false on wrong type
//       6) should ignore non-string values
//       7) should handle non-standard cases
// for example
// it.optional('should handle non-standard cases', () => {
// 	assert.equal(createDreamTeam([
// 	  ['David Abram'],
// 	  ['Robin Attfield'],
// 	  'Thomas Berry',
// 	  ['Paul R.Ehrlich'],
// 	  'donna Haraway',
// 	  ' BrIaN_gOodWiN  ',
// 	  {
// 		0: 'Serenella Iovino'
// 	  },
// 	  'Erazim Kohak',
// 	  '  val_plumwood',
// 	]), should return 'BDETV');
function createDreamTeam(members) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//   if(!Array.isArray(members)) {
// 	return false;
//   }
//   let result = '';
	 
//   for (let i = 0; i < members.length; i++) {

// 	  if (typeof members[i] === 'string') {
// 		if (members[i].includes(' ')) {
// 			members[i] = members[i].replace(/\s/g, '');
// 			result+= members[i][0].toUpperCase();
// 		}
// 		else {
// 		  result += members[i][0].toUpperCase();
// 		}
// 	  }
// 		else {
// 			continue
// 	}
//   }
//   return result.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
