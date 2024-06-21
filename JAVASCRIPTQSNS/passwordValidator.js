const passwordvalidator = (password) => {
  console.log(password)
  let hasUpperCase = false
  let hasLowerCase = false
  let hasNumber = false
  //   for (let char of password) {
  //     if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
  //       hasUpperCase = true
  //     }
  //     if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
  //       hasLowerCase = true
  //     }
  //     if (!isNaN(Number(char))) {
  //       hasNumber = true
  //     }
  //   }

  let upperCase = /[A-z]/
  let lowerCase = /[a-z]/
  let numbers = /[0-9]/
  if (upperCase.test(password)) {
    hasUpperCase = true
  }
  if (lowerCase.test(password)) {
    hasLowerCase = true
  }
  if (numbers.test(password)) {
    hasNumber = true
  }

  return hasLowerCase && hasUpperCase && hasNumber
}

const generatePassword = (minLength = 12) => {
  let password = ''
  const characters = {
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    specialCharacters: '!@#$%^&*()_+',
  }

  for (let index = 0; index < minLength; index++) {
    const chars =
      characters[
        Object.keys(characters)[
          Math.floor(Math.random() * Object.keys(characters).length)
        ]
      ]
    console.log(chars)
    password += chars[Math.floor(Math.random() * chars.length)]
  }
  return password
}

// Example usage

console.log(passwordvalidator(generatePassword()))
