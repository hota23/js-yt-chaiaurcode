// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const i of arr) {   //here object doesn't mean js object only
    // console.log(i)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`)
}


// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of India')
map.set('FR', 'France')
map.set('IN', 'India')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }

