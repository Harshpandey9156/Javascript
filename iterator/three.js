// for of
const arr = [1, 2, 3];

for (let val of arr) {
  //console.log(val);
}

const  greeting="haleewo space"
for(let greet of greeting)
{
   // console.log(`the vale of great is ${greet}`);
}

// map 
const  map =new Map() 
map.set("name","john")
map.set("age",30)
map.set("isMale",true)
for(let [key,value] of map)
{
   // console.log(`the key is ${key} and the value is ${value}`);
    //console.log(map)
}  

for( [key ,value] of map)
{
    console.log(key, ":->",value)
} 




//for object it is not iterable 
const object={
  'name':'john',
  'age':30
}
// for (const [keys ,vales] of object) {
//   console.log(keys, ":->",vales)
// }



// for in // for object

const object1={
  'name':'john',
  'age':30
}
for (const keys  in object1) {
  console.log(`${keys}, ":->",${object1[keys]}`)
}