const numberRangeRecursive = (a, b) => {
  if (a > b) {
    return
  } else {
    console.log(a)
    numberRangeRecursive(a + 1, b)
  }
}

console.log(numberRangeRecursive(0, 5))
