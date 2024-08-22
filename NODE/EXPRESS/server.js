const express = require('express')

const app = express()

app.get('/blogs', (req, res) => {})
app.post('/blogs', (req, res) => {})
app.put('/blogs/:id', (req, res) => {
  //   let { id, num } = req.params
  //   console.log(String(id), Number(num))
  console.log(JSON.parse(req.headers.name))
  res.send(res.headers)
})
app.delete('/blogs/:id', (req, res) => {})

app.listen(4000, () => {
  console.log('server started')
})
