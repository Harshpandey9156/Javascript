const abc={
    username: "harsh ",
    price: 35,
    welcommessage: function(){
        console.log(`${this.username} Welcome to our website.`);
        console.log(this)
    }


}
console.log(abc.welcommessage())
abc.username="pandey"
console.log(abc.welcommessage())

function chai()
{
    let username ="harsh"
    console.log(this)//is not working in the function  because it is not a object it only work in object
}
chai()

const chaii = ()=> {
    let username ="harsh"
    console.log(this.username)  
}   
chaii()