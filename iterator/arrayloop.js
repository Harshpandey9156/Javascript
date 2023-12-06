
//   [" " ,"", "",""]
// [{}, {}, {}, {}]

const arr=[1,2,3,4,5, 'hello', 'world', 'javascript'];

//normal function
arr.forEach( function (item) {
    console.log(item);
})

//arrow function
arr.forEach((item)=>{
    console.log(item)
})

//as an passing 
function print (item) {
    console.log(item)
}
arr.forEach(print)


//accessing the whole parameter for the following function

function print (item,index,array) {
    console.log(item,index,array)
}
arr.forEach(print)


arr.forEach((item,index,array)=>{
    console.log(item,index,array)
} )  

const mycodig=[
    {
        language:"javascript",
        name :"john",
        age :30

    },
    {
        language:"python",
        name :"abcdegf",
        age :35
    },
    {
        language:"java",
        name :"xyz",
        age :40 
    }
 
]

mycodig.forEach( function (item) {
    console.log(item.language); 
}
)

