// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

// const bigNumber = 5641564561555577799n

// Reference (Non primitive)

// Arrays, Objects, Functions   

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "raj",
    age: 89,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp)
console.log(typeof anotherId)

// https://262.ecma-international.org/5.1/#sec-11.4.3



//+++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "RajHota"

let anotherName = myName
anotherName = "bidyaratnaHota"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "raj@google.com"

console.log(userOne.email)
console.log(userTwo.email)
