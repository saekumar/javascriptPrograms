const name = 'Saikumar'

const age = 20

console.log(`Hello there my name is ${name}  and ${age} years old`)

const gameName = new String('Saikumar')

console.log(gameName[7])
console.log(gameName.__proto__)

const newString = gameName.substring(0, 5)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = '    Saikumar   '
console.log(newStringOne)
console.log(newStringOne.trim())

const url = 'https://saekumar1.netlify.app'
console.log(url.replace('mar', '-'))
console.log(url)
console.log(url.includes('mar'))
