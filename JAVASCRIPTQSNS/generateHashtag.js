// ip: janasena for better society
// op :#JanaseneForBetterSociety

const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false
  }
  str = str
    .split(' ')
    .map((curr) => curr.replace(curr[0], curr[0].toUpperCase()))
  console.log(str)
  str = `#${str.join('')}`
  return str
}
const generateHash2 = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false
  }
  str = str
    .split(' ')
    .map((curr) => curr.charAt(0).toUpperCase() + curr.slice(1))
  str = `#${str.join('')}`
  return str
}
console.log(generateHash('janasena for better society'))
// console.log(generateHash2('janasena for better society'))
