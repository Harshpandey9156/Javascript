const score=440
console.log(score)

const balance= new Number(100)
console.log(balance)


console.log(typeof score)
console.log(balance.toString().length) //converts the number into string and then gives the length of the string
console.log(score.toString().length)


const anotherNumber= 456.486
console.log(anotherNumber.toFixed(2)) //tofixed is used to fix the decimal places
console.log(anotherNumber.toPrecision(4)) //toPrecision is used to fix the total number of digits


const randomNumber= 10000000
console.log(randomNumber.toLocaleString('en-IN')) //toLocalString is used to convert the number into the local string format