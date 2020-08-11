/* Write a Program to Flatten a given n-dimensional array */

const flatten = (myArray) => 
{
	if(Array.isArray(myArray)==false)
	{
		return null;
	}
	var resultArr = String(myArray).split(',').map(Number);
	return(resultArr);
	//console.log(myNewArray4);



	
};
//console.log(flatten([1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]]));
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
