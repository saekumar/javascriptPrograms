const expres = require('express')

const app = expres()
const path = require('path')
const works = [
  {
    id: 1,
    work: 'Learn Node',
    isDone: false,
  },
  {
    id: 2,
    work: 'Learn React',
    isDone: true,
  },
  {
    id: 3,
    work: 'Learn Django',
    isDone: false,
  },
]
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'HTTP', 'index.html'))
})

app.listen(3000, (req, res) => {
  console.log('Server is running on port 3000')
})
