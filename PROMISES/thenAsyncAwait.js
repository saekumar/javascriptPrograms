const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = true
    let loc = 'Accessing  Files'
    if (err) {
      reject(`Error: at ${loc}`)
    } else {
      resolve({ name: 'saikumar', email: 'saiikumar@gmail.com' })
    }
  }, 1000)
})

promise
  .then(function (user) {
    console.log(user)
    return user.name
  })
  .then((name) => {
    console.log(name)
  })
  .catch((error) => {
    console.log(error)
  })

// async and await

async function getUser() {
  try {
    const user = await promise

    console.log(user)
  } catch (error) {
    console.log(error)
  }
}

getUser()
