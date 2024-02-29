// singleton
// Object.create
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Raj",
    "full name": "Raj Hota",
    [mySym]: "myKey1",
    age: 50,
    location: "Mohali",
    email: "rajHota@falana.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "bah@openai.com"
// Object.freeze(JsUser)
JsUser.email = "bah@yc.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console
.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

// console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
