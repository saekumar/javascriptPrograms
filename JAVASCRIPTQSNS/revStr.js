const revStr = (str) => {
  console.log(str)
  str = str.split('')
  let n = str.length
  for (let i = 0; i < n / 2; i++) {
    let temp = str[i]
    str[i] = str[n - i - 1]
    str[n - i - 1] = temp
  }

  return str.join('')
}

console.log(revStr('hello'))
