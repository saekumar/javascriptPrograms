// 'use strict'
// Treat all JS code as newer version

// alert(3 + 3)  We are using node js ,not browser

/*

Data types are of only 3 .
      
      * String
       
      * Number ==> 2^53

      * Boolean ==> true/false 
      
        null ==> Standard Value (Empty Value )

       undefined ==> value  not assigned

       symbol ==> unique 

       object 

*/

// console.log(typeof 'saikumar')
// console.log(typeof undefined)

console.log(10 + 34 + '20')
console.log(9 - '5' + '234')
console.log('9' / '5')
console.log('sai' - 'kumar')
console.log('' + 0)
console.log(false - true)
console.log('100' - 1 + true)
console.log([] + {})
console.log({} + [])
console.log(null + '1' - 1) //initially null + '1' ===> it cahnges to "null1" as null is used with + operator and a string '1' null will convert into 'null' and concatenate '1' to it res is 'null1' and later there is - operator with value 1.So  'null1' should be converted into number which is Not a Number(NaN) So it will return NaN
console.log(5 + null + '5' - true)
console.log('10' + 10 - 10)
console.log([] - [] + {})
console.log(5 * '5' + '5' * 2)
console.log(null == undefined)
console.log(true + false + '2')
console.log('10' + 10 - 5)
console.log('5' - -'5') //result will be 10 because '5' followed with - operator changes it to 5 and second operator - '5' will cahnge to -5.So result will be 5-(-5) which will be 10
console.log([] == false)
console.log(null == 0)
console.log(undefined + '1')
console.log(false + true + 'false')
console.log('' - 1)
console.log(null - '1')
console.log(true + null + '3')
console.log(0.1 + 0.2)
