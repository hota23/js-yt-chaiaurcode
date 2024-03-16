// Immediately Invoked Functions Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();//need the semicolon here to end the function if there are more than one iifes

// () ()
//used to remove the pollution from global variable

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('raj')

