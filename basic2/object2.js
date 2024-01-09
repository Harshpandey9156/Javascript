//single tone object
const tinder =new Object();

tinder.name = "Harsh";
tinder.age = 20;
tinder.email = "Har@gmail"
tinder.isLoggedin = true;

// console.log(tinder);


const regular= {
    email: "Har@gmail",
    fullname:{
        userfullname:{
        firstname: "Harsh",
        lastname: "Pandey"
        }
    }
    }
    console.log(regular.fullname.userfullname);

    const obj1 ={ 1:"a", 2:"b", 3:"c"};
    const obj2 ={ 4:"c", 5:"a", 6:"b"};

    const obj3 = Object.assign({}, obj1,obj2);//{} is the target object used for merging obj1 and obj2
    //another method for this
    console.log(obj3);
    const obj4 = {...obj1,...obj2};
    console.log(obj4);


    //in array we can create many object
    const arr = [
        {
            id: "first",
            age: 20
        },
        {
            id: "second",
            age: 21
        }
    ];
    console.log(arr[0].age);
    console.log(Object.keys(tinder))
    console.log(Object.values(tinder))
    console.log(Object.entries(tinder))



    const course={
        courseName: "Javascript",
        coursePrice: 1000,
        courseinstrucor: "Harsh"
    }

    course.courseinstrucor = "Harsh Pandey";
    console.log(course.courseinstrucor);

    // const{courseName}=course 


    //JSON

    // {
    //     'courseName': "Javascript",
    //    " coursePrice": 1000,
    //     "courseinstrucor": "Harsh"
    // }
    [
        {},
        {}
        
    ]
