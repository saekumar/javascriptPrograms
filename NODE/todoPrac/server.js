const express = require('express')
const app = express()
app.use(express.json())
let todos = []

app.get('/todos', (req, res) => {
  try {
    res.status(200).json({ todos })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'error in getting todos' })
  }
})

app.post('/todos', (req, res) => {
  try {
    todos.push({ ...req.body, id: todos.length + 1, isDone: false })
    res.status(200).json({ message: 'Todo posted' })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'error in posting todo' })
  }
})

app.delete('/todo/:id', (req, res) => {
  try {
    // splice or filter

    let { id } = req.params
    id = parseInt(id)
    // const idx = todos.findIndex((todo) => todo.id === id)
    // todos.splice(todos[idx], 1)

    todos = todos.filter((todo) => todo.id !== id)

    res.status(200).json({ message: 'todo deleted successfully' })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'error in deleting todo' })
  }
})

app.put('/todo/:id', (req, res) => {
  try {
    let { id } = req.params
    let { title, desc } = req.body
    id = parseInt(id)
    const idx = todos.findIndex((todo) => todo.id === id)
    if (idx !== -1) {
      todos[idx].title = title
      todos[idx].desc = desc
      return res.status(200).json({ message: 'updated' })
    } else {
      res.status(400).json({ message: 'todo not found' })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'error in deleting todo' })
  }
})

app.listen(3000, () => {
  console.log('server started at port 3000')
})
