
function filterNegativeNumbers(arrayNumbers){
	var positiveNumbers=[];
	var j=0;
	for(i=0; i < arrayNumbers.length; i++){
		if(arrayNumbers[i]>=0){
			positiveNumbers[j]=arrayNumbers[i];
			j++;
		}
	}

	return positiveNumbers;

}

console.log(filterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(filterNegativeNumbers([-4, -6, -5, -34, -54, -7]));
console.log(filterNegativeNumbers([]));

