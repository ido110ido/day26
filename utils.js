//4
export const greet = (nameGreet, isGreet = true) => 
isGreet? `Good evening, ${nameGreet}`:`Hi, ${nameGreet}`;

//5
export const calculate = (num1 , num2 , operation) =>{
    switch (operation) {
        case "add":
            return num1 + num2
        case "subtract":
            return num1 - num2
        case "multiply":
            return num1 * num2
        default:
            return num1 / num2
    }
}
//6
export const mergArray = (arr1 , arr2) => [...arr1,...arr2]