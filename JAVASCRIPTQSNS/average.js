const average = (arr) => {
  let sum = arr.reduce((accum, currEle) => {
    return accum + currEle
  }, 0)
  console.log(sum)
  return sum / arr.length
}

console.log(average([1, 2, 3, 4, 5, 87]))
