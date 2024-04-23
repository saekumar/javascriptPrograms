const longestword = (str) => {
  let currLength = Number(0)
  let text = ''
  str = str.split(' ').map((curr) => {
    if (curr.length > currLength) {
      text = curr
      currLength = curr.length
    }
  })
  return text
}

console.log(longestword('Hey guys!, Iam SaiKumar, student from KL University'))
