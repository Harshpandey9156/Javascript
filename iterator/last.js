//ref=duce

const Mynum =[1,2,3,4,5,6,7,8,9,10];

const num1=Mynum.reduce((acc,item)=>{
    console.log(`acc is ${acc} and item is ${item}`)
    return acc+item
},0) //0 is the initial value of acc    //it will not change the original array
console.log(num1)