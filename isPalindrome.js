
function isPalindrome(string){

    var newString = "";
    for(i in string) {
      if(string[i] != " ") {
        newString  += string[i];
      }
    }

    var answer=true;
    var letters= newString .split("");
    var backwardsLetters = newString .split("").reverse();

    for(i=0; i<Math.floor(letters.length/2); i++){
        if(letters[i]!=backwardsLetters[i]){
            answer=false;
        }
    }
    return answer
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hola")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("reconocer")); // true
console.log(isPalindrome("no subas abuson")); // true