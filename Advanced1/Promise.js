const Promise1=new Promise(function(resolve,reject){
    //do an asyn task
    //db call ,crypotgraphy.netwok call
    setTimeout(()=>{
        console.log("asign tadsk in complete");
        resolve()
    },1000)
})

Promise1.then(()=>{

    console.log("promish consumed");
})


new Promise(function(resolve , reject) {
    setTimeout(() => {
        console.log("asiggn task 2 ");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("assign task 2 resolved");

})