let score = '33'
console.log(typeof score)
console.log(typeof score)

let valueInNumber = Boolean(score)
console.log(typeof valueInNumber + ' hello ' + valueInNumber)

let score2 = null
console.log(typeof score2)

let valueInNumberScore2 = Boolean(score2)
console.log(valueInNumberScore2)

let score3 = undefined
console.log(typeof score3)

let valueInNumberScore3 = Number(score3)
console.log(valueInNumberScore3)

// "33" ==> 33
// "33abc" ==> NaN
// true ==> 1 false ==>0

let isOn = 0
let boolIsOn = Boolean(isOn)
console.log(isOn + ' ' + boolIsOn)

// 1 ==>true 0==> false

// "" ==> false
// "sai" ==>true

let some = 33
let stringNumber = String(some)
console.log(stringNumber + ' ' + typeof stringNumber)
