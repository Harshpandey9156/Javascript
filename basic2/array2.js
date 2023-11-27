const marvel=["thoe","ironman","spiderman","thor","blackwidow","blackpanther","antman"]
const dc=["batman","superman","wonderwoman","flash","aquaman","cyborg","greenlantern"]

marvel.push(dc)
console.log(marvel);


const allhero = marvel.concat(dc)
console.log(allhero);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const flat_array = another_array.flat(2)
console.log(flat_array)

console.log(Array.isArray("harsh"))
console.log(Array.from("harsh"))


let score=10
let score2=30
let score3=50

console.log(Array.of(score,score2,score3));