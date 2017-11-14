
function mapNumbersIntoStrings(arrayNumbers){
	var arrayString=[];
	for(i=0; i<arrayNumbers.length; i++){
		arrayString[i]=arrayNumbers[i].toString();
	}

	return arrayString;
}

console.log(mapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]));