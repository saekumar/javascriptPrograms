const express = require('express')
const fs = require('fs')
const app = express()
const { v4: uuidv4 } = require('uuid')
app.use(express.json())

let todos = []
console.log(todos)
app.post('/todos', (req, res) => {
  try {
    // const { title, description } = req.body
    fs.readFile(
      __dirname + '/todos.json',
      { encoding: 'utf-8' },
      (err, todos) => {
        todos = todos ? JSON.parse(todos) : []
        todos.push({ ...req.body, id: uuidv4(), isDone: false })
        fs.writeFile(
          __dirname + '/todos.json',
          JSON.stringify(todos),
          { encoding: 'utf-8' },
          (err) => {
            if (err) {
              res.status(404).json({ message: 'Error at adding todo' })
            } else {
              res.status(200).json({ mesage: 'Todo added successfully' })
            }
          }
        )
      }
    )
  } catch (error) {
    console.log('error in catch block')
    res.status(500).send('Something went wrong')
  }
})

app.get('/todos', (req, res) => {
  try {
    fs.readFile(
      __dirname + '/todos.json',
      { encoding: 'utf-8' },
      (err, todos) => {
        console.log(todos)
        todos = todos ? JSON.parse(todos) : []
        res.status(200).json({ todos })
      }
    )
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Errror in getting todos' })
  }
})

app.delete('/todos/:id', (req, res) => {
  try {
    let { id } = req.params

    // const idx = todos.findIndex((todo) => todo.id === id)
    // if (idx !== -1) {
    //   todos.splice(idx, 1)
    //   res.status(200).json({ mesage: 'Todo deleted ' })
    // } else {
    //   res.status(400).json({ mesage: 'Todo not found' })
    // }

    fs.readFile(
      __dirname + '/todos.json',
      { encoding: 'utf-8' },
      (err, todos) => {
        todos = todos ? JSON.parse(todos) : []
        let filteredTodo = todos.filter((todo) => todo.id !== id)
        fs.writeFile(
          __dirname + '/todos.json',
          JSON.stringify(filteredTodo),
          { encoding: 'utf-8' },
          (err) => {
            if (err) {
              return res.status(500).json({ message: 'Cannot delete Todo' })
            } else {
              return res
                .status(200)
                .json({ mesage: 'Todo deleted successfully' })
            }
          }
        )
      }
    )
  } catch (error) {
    console.log('error in deleting todo')
    res.status(400).json({ message: 'Errro in deleting todo' })
  }
})

app.put('/todos/:id', (req, res) => {
  try {
    // let { id } = req.params
    // let { title, description } = req.body
    // const idx = todos.findIndex((todo) => todo.id === id)
    // if (idx !== -1) {
    //   todos[idx].title = title
    //   todos[idx].description = description
    // } else {
    //   res.status(400).json({ mesage: 'Todo not found' })
    // }

    // res.status(200).json({ mesage: 'Updated' })

    let { id } = req.params
    let { title, description } = req.body
    fs.readFile(
      __dirname + '/todos.json',
      { encoding: 'utf-8' },
      (err, todos) => {
        todos = todos ? JSON.parse(todos) : []
        const idx = todos.findIndex((todo) => todo.id === id)
        todos[idx].title = title
        todos[idx].description = description
        fs.writeFile(
          __dirname + '/todos.json',
          JSON.stringify(todos),
          { encoding: 'utf-8' },
          (err) => {
            if (err) {
              return res
                .status(500)
                .json({ message: 'Soething went wrong while updating todo' })
            } else {
              return res
                .status(200)
                .json({ message: 'Todo updated sucessfully' })
            }
          }
        )
      }
    )
  } catch (error) {
    console.log(error)
    res.status(400).json({ mesage: 'error in updating todo' })
  }
})

app.listen(4000, () => {
  console.log('server started at PORT 4000')
})
