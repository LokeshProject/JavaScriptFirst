const array1 =['Lokesh','Suresh','Rajesh']
const array2 =['Das','sahu','Ram']
//it will be push the array inside new array
// array1.push(array2)
// console.log(array1)

//it create new array and rstore in new variable
// const newArray=array1.concat(array2)
// console.log(newArray)

const array3 =[1,2,3,[4,5,6],[7,8,9,[10,11,12,[13,14,15]]]];
console.log(array3.flat(Infinity));
 const sparray =[...array1,...array2,...array3.flat(Infinity).toString()]
console.log(...array1,...array2);
console.log(sparray);
