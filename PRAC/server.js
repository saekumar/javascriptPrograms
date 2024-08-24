console.log('hello')
const express = require('express')

const app = express()
function fun(req, res, next) {
  console.log('fun function')
  next()
}
app.use(fun)
app.get('/', (req, res) => {
  console.log('in home page')
  res.send('okay')
})

app.listen(3000, () => {
  console.log('server running on port 3000')
})
