const userEmail ="harsh@gmail.com"

if(userEmail)//it assume that the mail is correct
{
    console.log("Email is present");
}else//it assume that the mail is incorrect 
{
    console.log("Email is not present");
}

//falsy valve

// false ,0,-0 , BigInt , 0n , "" , null , undefined , NaN

// truthy valve

// true , 1 , -1 , "0" , "false" , [] , {} , function(){} , " " , "0n" , "null" , "undefined" , "NaN"

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null and  undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")