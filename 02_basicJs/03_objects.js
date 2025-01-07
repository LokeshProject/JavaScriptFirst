const sym = Symbol('key');

const object ={
    name:'Lokesh',
    age:24,
    'www':'http',
    [sym]:'symbol',
    email:'lokesh.das@maventechlabs.com',
    islogin: true,
    dayOfLogin:['monday','sunday']
}

const object2 = {
    name: 'Priya',
    age: 30,
    'www': 'https',
    [sym]: 'newSymbol',
    email: 'priya.sharma@maventechlabs.com',
    islogin: false,
    dayOfLogin: ['wednesday', 'friday']
};

object2.name='Ram';
console.log('!!!!!!!!!!!!',object2)
// it is use for freeze the object the data will not be change
Object.freeze(object2)
object2.name='Niru';
console.log('@@@@@@@@@@@@@@@@',object2)

console.log(object);
console.log(object.age);
console.log(object['age']);
console.log(object['www']);
console.log(object[sym]);
console.log(typeof object[sym]);

object.myfun = function (){
    console.log('Lokesh')
}
object.myfun2 = function (){
    console.log(`My name is ${this.name}`)
}
console.log(object.myfun())
console.log(object.myfun2())



