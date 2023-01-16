//1
const square = (x) => x**2;
console.log(square(2));
//2
const isPositive = (x) => x >= 0;
console.log(isPositive(-2));
//3
const formatName = (firstName,lastName,separator = " ") => firstName + separator + lastName;
console.log(formatName('ido','atias'));
//4
import {greet,calculate,mergArray} from './utils.js'
console.log(greet('ido', false));
//5
console.log(calculate(1,2,"subtract"));
//6
const team = ["Chennai", "Mumbai", "Bangalore"];
const captain = ["Dhoni", "Rohit", "Kohli"];
console.log(mergArray(team,captain));
//9
const user = ['John','Doe',32]
const [firstName,lastName,age] = user
console.log(firstName);
console.log(lastName);
console.log(age);
//11
const actors = [
    { actorName: "Tom Hanks", birthdate: "July 9, 1956" },
    { actorName: "Meryl Streep", birthdate: "June 22, 1949" },
    { actorName: "Leonardo DiCaprio", birthdate: "November 11, 1974" },
];
const [firstActor, , thirdActor] = actors;
console.log(firstActor);
console.log(thirdActor);
thirdActor.birthdate = "June 22, 1949"
console.log(thirdActor);
//12
const sortDescending = (arr = []) => arr.sort()
console.log(sortDescending([3,4,5,6,1,2,3,98]));
//13
class Person{
    constructor(name , age){
        this.name = name
        this.age = age
    }

    sayHello() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }

}
let person =new Person('ido', 23)
console.log(person.sayHello());