const rev = (num) => {
  let reqnum = 0
  while (num > 0) {
    let rem = num % 10
    reqnum = reqnum * 10 + rem
    num = Math.floor(num / 10)
  }
  return reqnum
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.forEach((l) => console.log(l))
const filtered = arr.filter((l) => l > 3)
const filtered2 = arr.filter((l) => l % 3 === 0)

const data = [
  {
    name: 'saikumar',
    fruit: 'apple',
    age: 19,
  },
  {
    name: 'teja',
    fruit: 'guava',
    age: 19,
  },
  {
    name: 'ganee',
    fruit: 'apple',
    age: 17,
  },
  {
    name: 'mani',
    fruit: 'mango',
    age: 19,
  },
  {
    name: 'raju',
    fruit: 'sapota',
    age: 29,
  },
]
const fil = data
  .filter((person) => person.age > 18 && person.fruit === 'apple')
  .map((person) => person.name)

console.log(filtered)
console.log(filtered2)
console.log(rev(1234))
console.log(fil)
