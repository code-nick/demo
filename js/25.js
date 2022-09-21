
//primitive vs refrence data types

let num1 = 6 
let num2 = num1;
console.log("Value is num1 is" , num1);
console.log("Value is num2 is ",num2);
num1++;
console.log("after increment num1");
console.log("Value is num1 is" , num1);
console.log("Value is num2 is ",num2);

//refrence data type

let array1  = ["item1","item2"];
let array2 = array1;
console.log("array1",array1);
console.log("array2 ",array2);
array1.push("array");
console.log("after increment");
console.log("array1",array1);
console.log("array2 ",array2);


