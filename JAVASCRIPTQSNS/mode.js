const mode = (arr) => {
  let counts = {}
  arr.map((ele) => (counts[ele] = (counts[ele] || 0) + 1))
  return counts
}

console.log(mode([1, 1, 2, 5, 1, 2, 4, 8, 4, 8, 56, 4]))
