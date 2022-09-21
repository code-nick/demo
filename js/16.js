
// nested if else

let winningnumber   = 19;
let userguess = +prompt("Guess Number");

if(userguess === winningnumber){
    console.log("your Guess is right");
}else{
    if(userguess < winningnumber){
        console.log("Too low !!!");
    }else{
        console.log("Too High !!!");
    }
}