// function claculateCartPrice(...num1) {
//   return num1
// }

// const price = claculateCartPrice(34, 567, 876)
// console.log(price)

// function calculateCartPrice2(val1, val2, ...num1) {
//   return num1
// }

// const price2 = calculateCartPrice2(34, 567, 876, 678)
// console.log(price2)

/*
Calling objects through functions and destructuring them

*/
const User1 = {
  userName1: 'Saikumar',
  userId1: 1,
  userSalary1: 200000,
}
const User2 = {
  userName2: 'Saikumar',
  userId2: 1,
  userSalary2: 200000,
}

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.userName1}  Salary is ${anyObject.userSalary1} `
  )
}

handleObject(User1)

// handleObject({
//   userId1: 23,
//   userName1: 'Chaitanya',
//   userSalary1: 200000,
// })

/*        Through Arrays    */

const myNewArray = [200, 400, 474]

function returnSecondValue(getArray) {
  return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([12, 45, 567]))
