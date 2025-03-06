let a =300;
const b= 4783;

if('lokesh'==='lokesh'){
    let a= 10; // it access only inside the scope
    const b=20;// it access only inside the scope
    var c=30; // it access outside the scope and inside global file
}
console.log(a);//300
console.log(b);//4783
console.log(c);
