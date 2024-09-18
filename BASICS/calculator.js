const calculator = (val1, val2, operator) => {
  if (operator === '+') return val1 + val2
  if (operator === '-') return Math.abs(val1 - val2)
  if (operator === '*') return val1 * val2
  if (operator === '/') return (val1 / val2).toFixed(2)
}

const revString = (str) => {
  return str.split('').reverse().join('')
}
const palindrome = (str) => {
  let revStr = str.split('').reverse().join('')
  if (revStr === str) return true
  return false
}
console.log(revString('name saikumar puppala'))
console.log(calculator(23, 45, '/'))
console.log(palindrome('malayalam madam malayalam'))
