// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast
var fruits = [{name: 'apple', color: 'red', pricePerKg: "85"}, {name: 'orange', color: 'orange', pricePerKg: "45"},{name: 'pear', color: 'green', pricePerKg: "65"}];
var obj = {};
for(var i=0;i<fruits.length;i++)
{
	var keys = fruits[i].name;
    obj[keys] = {"color": fruits[i].color,"pricePerKg":fruits[i].pricePerKg};
    
}
console.log(obj);


// Write your code here

