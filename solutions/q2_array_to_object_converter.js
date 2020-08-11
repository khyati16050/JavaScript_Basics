/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (arr,key) => {
	var flag = Array.isArray(arr);
	//console.log(flag);
	if(flag==false)
	{
		return null;
	}
	var obj = {};
	for(var i=0;i<arr.length;i++)
	{
		var keys = arr[i][key];
		obj[keys] = arr[i];
	}
	return obj;
	// Write your code here
};
// console.log(convert('invalid value'));
// console.log(String(convert('invalid value')));
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
