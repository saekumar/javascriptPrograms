const http = require('http')
const fs = require('fs')

// // Imp methods in Http module GET POST PUT DELETE PATCH

// const server = http.createServer((req, res) => {
//   if (req.url == '/') {
//     let filePath = __dirname + '/index.html'
//     fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
//       if (err) {
//         res.end('404 Not Found')
//       } else {
//         res.end(data)
//       }
//     })
//   } else {
//     res.end(JSON.stringify({ message: '404 Not found' }))
//   }
// })
// server.listen(3000, () => {
//   console.log('Server is running on port 3000')
// })

const server = http.createServer((req, res) => {
  if (req.method == 'GET') {
    res.end('get method')
  } else if (req.method == 'POST') {
    res.end('POST method')
  } else if (req.method == 'POST') {
    res.end('POST method')
  } else if (req.method == 'POST') {
    res.end('POST method')
  }
})

server.listen(3000, () => {
  console.log('server started')
})
