//for 
const array=[1,2,3,4,5,6,7,10,9,10];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
   // console.log(element);
}

let myarray =["flash", "andthe" , "arrow"];
console.log(myarray.length);
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    //console.log(element);
}

//break and continue
let myarray1 =["flash", "andthe" ,"for ", "arrow"];
for (let i = 0; i < myarray1.length; i++) {
    const element = myarray1[i];
    if (element=="andthe") {
        continue;
        // break;
    }
    console.log(element);

}

//while
let i=0;
while (i<myarray.length) {
    // console.log(myarray[i]);
    i++;
}