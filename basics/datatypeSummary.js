//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

//OBJECT
let myObj = {
    name: "Harsh",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

//+++++++++++++++++++++++++++++++++++++++++++
//stack and heap

//premeyive data types are stored in stack
//reference data types are stored in heap
let my1Function ="harsh"

let my2Function = my1Function
my2Function = "harsh2"

console.log(my1Function);
console.log(my2Function);

//+++++++++++++++++++++++++++++++++++++++++++
let my1Obj = {
    email: "abc@gmail.com",
    age :20
}

let my2Obj = my1Obj
my2Obj.age = 21

console.log(my1Obj);
console.log(my2Obj);
