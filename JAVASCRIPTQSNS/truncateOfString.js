// given a string and maxLength if length of that string excedds maxlength slice it upto the length and concat '...' to the sliced part
// if length<maxlength return normal String

const truncate = (str, len) => {
  if (str.length <= len) return str
  else {
    return str.slice(0, len).concat('...')
  }
}

console.log(truncate('I am gonna achive big ', 24))
