function Person(name, age){
    this.name=name;
    this.age=age;
}

Person.prototype.printName=function(){
    console.log(this.name);
}

function printOutPersonAge(student){
 console.log(student.age);
}

const student = new Person('John', 25);
student.printName(); // "John"
printOutPersonAge(student); // 25