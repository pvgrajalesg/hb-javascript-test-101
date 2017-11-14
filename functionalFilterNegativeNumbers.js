
function filterNegativeNumbers(value){
	return value>=0;

}

var valoresPositivos=[-4, -6, -5, 0, 34, 54, -7].filter(filterNegativeNumbers);
console.log(valoresPositivos);