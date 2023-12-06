const myNumber =[1,2,3,4,5,6,7,8,9,10]

const newarr=myNumber.map((item)=>(item*2)).map((item)=>(item+1)).filter((item)=>(item>10))
console.log(newarr)   //it will not change the original array