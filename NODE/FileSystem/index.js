// const fs = require('fs')
// // console.log(fs)
// fs.writeFileSync('hello.txt', 'Hello from Node.js')
// console.log(fs.readFileSync('hello.txt'))
// console.log(__dirname)

// fs.writeFileSync(__dirname + '/hello.txt', 'Hello from Node.js')

// fs.writeFileSync(
//   `${__dirname}/saikumar.py`,
//   'print([(ord(ch)-97) if ch not in "aeiou" else ch for ch in input("")])'
// )

// fs.writeFile(`${__dirname}/saikumar2.txt`, 'hello saikumar', function (err) {
//   if (err) {
//     throw err
//   }
//   console.log('file created')
// })

// let res = fs.readFile(
//   `${__dirname}/saikumar.txt`,
//   'utf8',
//   function (err, data) {
//     if (err) {
//       throw err
//     }
//     console.log(data)
//   }
// )

// console.log(res)

// const fs = require('fs/promises')

// fs.writeFile(
//   `${__dirname}/check.txt`,
//   'hello there!  I am Sai Kumar',
//   function (err) {
//     if (err) {
//       console.log('Error at creating file ')
//     } else {
//       console.log(`File created at ${__dirname}/check.txt`)
//     }
//   }
// )

// let readFileData = fs.readFile(
//   `${__dirname}/check.txt`,
//   'utf-8',
//   function (err, data) {
//     if (err) throw err
//     else {
//       console.log(data)
//     }
//   }
// )
// console.log(readFileData)

// console.log('1')
// const data = 'a'.repeat(2 * 1024 * 1024) // 2 MB of data
// try {
//   fs.writeFile('check2.txt', data)
//   console.log('File write successful')
// } catch (err) {
//   console.error('Error writing file:', err)
// }
console.log('2')

// fs.unlink('saikumar.txt') //delete file

// fs.appendFile('check.txt', 'Yes it is appending \n', (err) => {
//   if (err) {
//     throw err
//   } else {
//     console.log('data appended')
//   }
// })

// fs.copyFile('check.txt', 'checkCopy.txt')

// fs.mkdir(`${__dirname}/folder2/file1.js`)
