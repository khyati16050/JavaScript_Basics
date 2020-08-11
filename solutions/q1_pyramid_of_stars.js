/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (n) => {
    var result = "";
    
    //var k = 0;
    
    for(let i=0;i<n;i++)
    {
        var empty = "";
        var starString = "* ";
        empty = " ".repeat(n-i)+ starString.repeat(i+1);
        result += (empty + " \n") ;
        
        
    }
    return result;

	// Write your code here
};
//console.log(buildPyramid(5));

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
