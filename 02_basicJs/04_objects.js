//const test = new object();
// const test={}
// test.id='123'
// console.log(test);

const a1={1:'a',2:'b'}
const a2={3:'c',4:'d'}
const a3={5:'e',6:'f'}
const a4={7:'g',8:'h'}
const r1={a1,a2}
console.log(r1) //{ a1: { '1': 'a', '2': 'b' }, a2: { '3': 'c', '4': 'd' } }
const r2 = Object.assign({},a1,a2,a3,a4)
console.log(r2)
// {
//     '1': 'a',
//     '2': 'b',
//     '3': 'c',
//     '4': 'd',
//     '5': 'e',
//     '6': 'f',
//     '7': 'g',
//     '8': 'h'
//   }
//here the all object are store in a new object because it ues a empty object in starting 
const r3 = Object.assign(a1,a2,a3,a4)
console.log(r3)
// {
//     '1': 'a',
//     '2': 'b',
//     '3': 'c',
//     '4': 'd',
//     '5': 'e',
//     '6': 'f',
//     '7': 'g',
//     '8': 'h'
//   }
//here the all object are store in a1 object
const r4={...a1,...a2}
console.log(r4)
// {
//     '1': 'a',
//     '2': 'b',
//     '3': 'c',
//     '4': 'd',
//     '5': 'e',
//     '6': 'f',
//     '7': 'g',
//     '8': 'h'
//   }
console.log(Object.keys(r4))
// [
//     '1', '2', '3',
//     '4', '5', '6',
//     '7', '8'
//   ]
console.log(Object.values(r4));
// [
//     'a', 'b', 'c',
//     'd', 'e', 'f',
//     'g', 'h'
//   ]
console.log(Object.entries(r4));
// [
//     [ '1', 'a' ],
//     [ '2', 'b' ],
//     [ '3', 'c' ],
//     [ '4', 'd' ],
//     [ '5', 'e' ],
//     [ '6', 'f' ],
//     [ '7', 'g' ],
//     [ '8', 'h' ]
//   ]
//console.log(r4.hasOwnProperty(7));true
console.log(r4.hasOwn(7));
