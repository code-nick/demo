
// how to  iterate object

const person = {
    name : "vicky",
    age : 22 ,
    hobbies : ["guiter" , "music" ,"sleeping"]
}
// for(let key in person){
//     console.log(key);
// }

// console.log(typeof (Object.keys(person)));
// const val = Array .isArray((Object.keys(person)))
// console.log(val);

for(let key of Object.keys(person)){
    console.log(person);
}