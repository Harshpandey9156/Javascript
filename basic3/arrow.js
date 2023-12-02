const abc={
    username: "harsh ",
    price: 35,
    welcommessage: function(){
        console.log(`${this.username} Welcome to our website.`);
        // console.log(this)
    }


}
console.log(abc.welcommessage())
abc.username="pandey"
console.log(abc.welcommessage())

function chai()
{
    let username ="harsh"
    console.log(this.username)//is not working in the function  because it is not a object it only work in object
}
chai()

const chaii = ()=> {
    let username ="harsh"
    console.log(this.username)  
}   
chaii()

const addtwo = (a,b) => {   
    return a+b
}
console.log(addtwo(2,3))

const addtwoo = (a,b) => a+b
console.log(addtwoo(2,3))

//object return in the arrow function
const addtwooo = (a,b) => ({username:"harsh",age:23})
console.log(addtwooo(2,3))
