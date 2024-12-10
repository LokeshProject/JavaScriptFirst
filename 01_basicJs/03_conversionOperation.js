let a ='10'
let b ='10qqq'
let c =null
let d = undefined
let e = true
let g = false

let newA= Number(a)
let newB= Number(b)
let newC= Number(c)
let newD= Number(d)
let newE= Number(e)
let newG= Number(g)


console.log(typeof newA)//number
console.log(typeof newB)//number
console.log(typeof newC)//number
console.log(typeof newD)//number
console.log(typeof newE)//number
console.log(typeof newG)//number
console.log('-----------------------------------------')
console.log(newA)//10
console.log(newB)//NaN
console.log(newC)//0
console.log(newD)//NaN
console.log(newE)//1
console.log(newG)//0


console.log('Boolean_______________________________Boolean')

let isLogin=1
let booleanLogin= Boolean(isLogin)
console.log(booleanLogin)//True

let name1=''
let booleanName=Boolean(name1)
console.log(booleanName)//False

let namea='Das'
let booleanNameq=Boolean(namea)
console.log(booleanNameq)//True

let vale=0
let boolenValue =Boolean(vale)
console.log(boolenValue);//False

let vale1=null
let boolenValue1 =Boolean(vale)
console.log(boolenValue1);//False

let vale2 
let boolenValue2 =Boolean(vale)
console.log(boolenValue2);//False


let vale3 =undefined
let boolenValue3 =Boolean(vale)
console.log(boolenValue3);//False

let vale4 =NaN
let boolenValue4 =Boolean(vale)
console.log(boolenValue4);//False
