// Immediately Invoked Functions Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();//need the semicolon here to end the function

// () ()
//used to remove the pollution from global variable

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('raj')

