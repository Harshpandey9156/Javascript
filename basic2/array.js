const myArr=[1,2,3,4,5,6,7,8,9,10];
// console.log(myArr.length);

const myArr2=new Array(1,2,3,4,5,6,7,8,9,10);
// console.log(myArr2[2]);

myArr2.push(11);
console.log(myArr2); 

//remove the first element element
myArr2.unshift(0);
console.log(myArr2);
myArr2.shift();

myArr2.pop();
console.log(myArr2);


//slice and splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
