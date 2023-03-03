console.log("Hello World");

// Declaration
let message;
message = "Hello"; // String "Hello"

let number;
number = 123;

console.log(message);
console.log(number);

// Variable Declaration
var a = 'var' // bisa redeclare, bisa reassign
let b = 'let' // tidak bisa di redeclare, bisa reassign
const c = 'const' // tidak bisa di redeclare, tidak bisa reassign

// Variable Naming
let date1 = new Date('2023/02/27')
let date2 = new Date('2023/06/09');
let difference = date2.getTime() - date1.getTime();

console.log(difference + 'day');