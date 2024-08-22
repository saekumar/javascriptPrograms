const express = require('express')

const app = express()

app.use(express.json())

function fun(req, res, next) {
  console.log('FUN function here')
  next()
}

app.use(fun)

app.get('/', (req, res) => {
  let result = req.body
  res.status(200).json({ message: 'Yesss!', result })
})
app.listen(3000, () => {
  console.log('server started')
})
