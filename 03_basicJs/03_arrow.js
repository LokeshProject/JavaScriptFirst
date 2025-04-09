// const user={
//     name:'Lokesh',
//     age:24,
//     eId:103,



//     details:function(){
//         console.log(`${this.name}, wellcome`);
//         console.log(this);
        
//     }
// }
// user.details()
// user.name = 'snigdha'
// user.details()

// function chaii(){
//     let name='Nirupama'
//     console.log(this);
//     console.log(this.name);
    
// }

// const chai = function (){
//     let name='Nirupama'
//     console.log(this);
//     console.log(this.name);
    
// }
// chaii();
// chai();

// const chai = () => {
//     let name='Nirupama'
//     console.log(this);
//     console.log(this.name);
    
// }



const chai = (num1 , num2 ) => {
   return(num1+num2)
    
}

const chai1 = (num1 , num2 ) => (num1+num2)
const chai2 = (num1 , num2 ) => num1+num2  
const chai3 = (num1 , num2 ) => ({name1:'Lokesh',name2:'das',name3:'Ram',name4:'Syam'})
const chai4 = (num1 , num2 ) => (['Lokesh','Das'])

console.log(chai(1,5));
console.log(chai1(9,5));
console.log(chai2(6,5));
console.log(chai3(39,78));
console.log(chai4(3,78));
