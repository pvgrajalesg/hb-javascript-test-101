
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
	return {
		r : Math.floor((Math.random() * 255) + 0),
		g : Math.floor((Math.random() * 255) + 0),
		b : Math.floor((Math.random() * 255) + 0)
	}
}

export function isPalindrome(string) {

	var newString = string.replace(/\s/g, "");
	var lowerCase = newString.toLowerCase();
	var answer = true;
	var letters = lowerCase.split("");
	var backwardsLetters = lowerCase.split("").reverse();

	for (var i = 0; i < Math.floor(letters.length / 2); i++) {
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