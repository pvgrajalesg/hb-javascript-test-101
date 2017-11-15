
export function filterNegativeNumbers(arrayNumbers) {
	var positiveNumbers = [];
	var j = 0;
	for (var i = 0; i < arrayNumbers.length; i++) {
		if (arrayNumbers[i] >= 0) {
			positiveNumbers[j] = arrayNumbers[i];
			j++;
		}
	}

	return positiveNumbers;

}

export function functionalfilterNegativeNumbers(arrayNumbers) {
    return arrayNumbers.filter(number => number >= 0)
}

export function functionalMapNumbersIntoStrings(arrayNumbers){
    return arrayNumbers.map(string => string.toString());
}

export function generateRandomColor() {
	var r = Math.floor((Math.random() * 255) + 0);
	var g = Math.floor((Math.random() * 255) + 0);
	var b = Math.floor((Math.random() * 255) + 0);

	var color = '{r: ' + r + ' g: ' + g + ' b: ' + b + '}';

	return color;
}

export function isPalindrome(string) {

	var newString = "";
	var lowerCase = string.toLowerCase();
	for (var i in lowerCase) {
		if (string[i] != " ") {
			newString += lowerCase[i];
		}
	}

	var answer = true;
	var letters = newString.split("");
	var backwardsLetters = newString.split("").reverse();

	for (i = 0; i < Math.floor(letters.length / 2); i++) {
		if (letters[i] != backwardsLetters[i]) {
			answer = false;
		}
	}
	return answer
}

export function mapNumbersIntoStrings(arrayNumbers) {
	var arrayString = [];
	for (var i = 0; i < arrayNumbers.length; i++) {
		arrayString[i] = arrayNumbers[i].toString();
	}

	return arrayString;
}

export class Person {

	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	printName() {
		console.log(this.name);
	}
}

export function printOutPersonAge(student) {
	console.log(student.age);
}

export function printType(variable) {
	console.log(typeof (variable));
}