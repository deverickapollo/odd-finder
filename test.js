//Testing testing please

var test = require('tape');
var oddFinder = require('./');


test('Module Returns a function',function(t){
	t.equals(typeof oddFinder,'function');
	t.end();

})


test ('newTest', function(t){
	var newArray = ['sdfdsmd','sdfdsa'];
	var outputArray = oddFinder(newArray);
	t.equals(outputArray.length,1,"One Element in output Array");	
	t.equals(outputArray[0],"sdfdsmd","Element is what we expect it to be");
	t.end();
} )


test('Returns even Strings conditionally', function(t){
	var newArray = ['rer', 'er'];
	var outputArray = oddFinder(newArray, true);
	t.equals(outputArray.length,1,"One element exists in the outputArray");
	t.equals(outputArray[0],"er","Element is the one we expect") 
	t.end();
})


