// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({
//       name: 'Saikumar',
//       email: 'saikumarpuppala@gmail.com',
//       collge: 'KL University',
//     })
//   }, 1000)
// }).then(function (user) {
//   console.log(user.collge)
// })

// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true
//     let location = 'File accessing'
//     if (!error) {
//       resolve({ username: 'saekumar07', email: 'saikumar@gmail.com' })
//     } else {
//       reject(`something went wrong at ${location}`)
//     }
//   }, 1000)
// }).then(function (user) {
//   console.log(user)
// })

// function handleFulfilledA(value) {
//   console.log('Promise fulfilled with:', value)
//   // You can perform some operation on the resolved value here
//   return value // You can return a new value for chaining
// }

// function handleRejectedA(error) {
//   console.error('Promise rejected with:', error)
// }

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo')
//   }, 300)
// })

// myPromise.then(handleFulfilledA, handleRejectedA) // Pass defined functions here

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false
//     let location = 'Accesiing Files'
//     if (error) {
//       reject(`Error at ${location}`)
//     } else {
//       resolve({ username: 'saikumar', email: 'saikumar@gmail.com' })
//     }
//   }, 1000)
// })

// promise
//   .then(function (user) {
//     console.log(user)
//     return user.username
//   })
//   .then(function (username) {
//     console.log(username)
//   })

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true
    let location = 'Accesiing Files'
    if (error) {
      reject(`Error at ${location}`)
    } else {
      resolve({ username: 'saikumar', email: 'saikumar@gmail.com' })
    }
  }, 1000)
})

async function consumePromiseFive() {
  try {
    const res = await promiseFive
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive()

// async function getAllusers() {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     console.log(data)
//   } catch (error) {
//     console.log('E: ', error)
//   }
// }
// getAllusers()

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(function (res) {
//     return res.json()
//   })
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })
