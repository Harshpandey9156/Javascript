// Declare a Symbol
const sym1 = Symbol("key1");
//Object literal
// Create an object with various properties, including a property with the Symbol key
const JsObject = {
    name: "Harsh ",
    [sym1]: "key1",
    Age: 20,
    email: "Harsh@gmail.com",
    isLoggedin: true
}

// // Access properties of the object
// console.log(JsObject.Age);  // Output: 20
// console.log(JsObject["name"]);  // Output: Harsh

// Access the property with the Symbol key
console.log(typeof JsObject[sym1]);  // Output: string
console.log(JsObject[sym1]);  // Output: key1

//if we are changing the value of the jsObject
JsObject.Age = 21;
console.log(JsObject.Age);  // Output: 21
// Object.freeze(JsObject); //freeze the object
console.log(JsObject); 

//greating

JsObject.greeting = function(){
    return `Hello ${this.name}`;
}
console.log(JsObject.greeting()); // Output: Hello Harsh

