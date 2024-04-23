const Palindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, '')
  let revStr = str.split('').reverse().join('')

  console.log(str)
  return str === revStr ? true : false
}

console.log(Palindrome('Malayalam madam Malayalam'))
