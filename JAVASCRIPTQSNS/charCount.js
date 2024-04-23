const charCout = (str, char) => {
  str = str.toLowerCase()
  char = char.toLowerCase()
  let count = 0
  //   for (let i = 0; i < str.length; i++) {
  //     if (str.charAt(i) === char) {
  //       count += 1
  //     }
  //   }

  count = str.split('').reduce((accum, curr) => {
    if (curr === char) {
      accum++
    }
    return accum
  }, 0)

  return count
}

console.log(charCout('MisiiSsippI', 's'))
