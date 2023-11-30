let a=10
const b=20
var c=30

if(true){
    let a=40
    const b=50
    var c=60
    console.log(a)
    console.log(b)
    console.log(c)
}


console.log(a)
console.log(b)
console.log(c)

function one(){
    const username="harsh"
    // console.log(username)

    function two(){
        const web="web"
        console.log(username)
    }
    // console.log(web)
    two()

}
one()
 

// scope function are used to access the variable outside the function

// ============================================================
function addone(value){
    return value+1
}
addone(2)

function addtwo(value){
    return value+2
}
// console.log(addthree(2))

const addthree=function(value){ 
    return value+3
}

console.log(addone(2))
