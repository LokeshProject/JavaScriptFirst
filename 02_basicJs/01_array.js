const arry =[1,2,3,4,5,6]

console.log(arry);
console.log(arry[1]);
const arry2 = new Array(1,2,3,4)
console.log(arry2);
  

//aad new value in last 
arry.push(7)

arry.push(8)
console.log(arry);

//remove value from last
arry.pop();
console.log(arry);
//add new itam in start
arry.unshift(9)
console.log(arry);
//Remove itamfrom start
arry.shift()
console.log(arry);
//it finding it present or not ,it give boolen value output
console.log(arry.includes(6));
//it finding it present or not ,it give boolen value output
console.log(arry.includes(9));
// when index not present it give -1
console.log(arry.indexOf(9));
// when index present then it give that index value
console.log(arry.indexOf(3));

const newArry =[10,20,30,40,50,60,70,80,90]
console.log(newArry.slice(1,5));
console.log(newArry.splice(0,3));
console.log(newArry);


