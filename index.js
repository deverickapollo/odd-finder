module.exports = function(input,returnEven ){


	var filteringFunction = returnEven ? negate(stringHasOddCharacters) : stringHasOddCharacters
	return input.filter(filteringFunction);
}



function stringHasOddCharacters(str){
	
	return str.length%2 === 1; 

}



function negate(fn){
	return function theOppositeofOriginal (value){	
		return !fn(value);
	}


}


