
// how to clone array

// how to concatenata two array


let array1 = ["item","item"];
// let array2 = ["item" ,"item"];
// let array2 = array1.slice(0);   
// let array2 =  [].concat(array1);
let array2 = [...array1];
array1.push("item3");
console.log(array1===array2);
console.log(array1);
console.log(array2);
