let score="33abc"


console.log(typeof score)
console.log(typeof (score))   
//convertin the string in to the number

let valueInNumber= Number(score)
console.log(typeof valueInNumber)
console.log( valueInNumber)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let islogedIn= 1
let booleanIsLoggedIn = Boolean(islogedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let SomeNumber=33

let StringNumber =String(SomeNumber)
console.log(StringNumber)
console.log(typeof StringNumber)



//Operations are

let value=3
let negValue=-value
console.log(negValue)



// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true)
console.log(+"")