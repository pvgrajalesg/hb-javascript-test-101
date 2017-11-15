
export function filterNegativeNumbers(arrayNumbers) {
	var positiveNumbers = [];
	var j = 0;
	for (i = 0; i < arrayNumbers.length; i++) {
		if (arrayNumbers[i] >= 0) {
			positiveNumbers[j] = arrayNumbers[i];
			j++;
		}
	}

	return positiveNumbers;

}

export function filterNegativeNumbers(value) {
	return value >= 0;

}

var valoresPositivos = [-4, -6, -5, 0, 34, 54, -7].filter(filterNegativeNumbers);
console.log(valoresPositivos);

var strings = [-4, -6, -5, 0, 34, 54, -7].map(function (number) {
	return number.toString();
});

console.log(strings);

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
	for (i in lowerCase) {
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
	for (i = 0; i < arrayNumbers.length; i++) {
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

const student = new Person('John', 25);
student.printName(); // "John"
printOutPersonAge(student); // 25

export function printType(variable) {
	console.log(typeof (variable));
}

printType(1);