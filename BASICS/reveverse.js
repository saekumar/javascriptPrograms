const rev = (str) => {
  let arr = str.split(' ').reverse()
  console.log(arr)
  let resStr = ''
  //   resStr = arr.map((item) => {
  //     let reverseSubStr = item.split('').join('')
  //     resStr += reverseSubStr + ' '
  //   })

  for (let i = 0; i < arr.length; i++) {
    let subStr = arr[i].split('').reverse().join('')
    resStr += subStr + ' '
  }
  return resStr
}

console.log(rev('lets check it'))
