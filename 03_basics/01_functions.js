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
// console.log(logInUserMessage("raj"))



function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 600))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 600, 70000]))
