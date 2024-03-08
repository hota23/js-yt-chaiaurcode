function sayMyName(){
    console.log('r')
    console.log('a')
    console.log('j')
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2) 
// }

// addTwoNumbers(2,"3")
// addTwoNumbers(2,"a")
// addTwoNumbers(2,null)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function logInUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(logInUserMessage("raj"))
// console.log(logInUserMessage(""))
console.log(logInUserMessage("raj"))



