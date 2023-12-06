const cod= [ "harsh","js","html","c"]

const values = cod.forEach((item)=> {
    //console.log(item)
    return item
})
console.log(values)


const myNumber = [1,2,3,4,5,6,7,8,9,10]

const mum= myNumber.filter((num)=> num> 5)
const mum1= myNumber.filter((num)=>{ 
    return num%2===0})
console.log(mum)
console.log(mum1)


myNumber.filter((item)=>{
    return item%2===0
}) 