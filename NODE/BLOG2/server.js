const express = require('express')

const app = express()
app.use(express.json())
let users = []

app.post('/users', (req, res) => {
  try {
    let { name, email, password } = req.body
    if (!name || !email || !password) {
      res.status(400).json({
        Success: false,
        message: 'Please fill all the details',
      })
    } else {
      users.push({ ...req.body, userid: users.length + 1 })
      res
        .status(200)
        .json({ Success: true, message: 'User added successfully' })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ messae: 'Error at adding user' })
  }
})

app.get('/users', (req, res) => {
  try {
    res.status(200).json(users)
  } catch (error) {
    console.log(error)
    res.status(400).json({ messae: 'Error at getting users' })
  }
})

app.get('/users/:userid', (req, res) => {
  try {
    let { userid } = req.params
    userid = parseInt(userid)
    let filteredUser = users.filter((user) => user.userid === userid)
    if (filteredUser) {
      res.status(200).json({ success: true, filteredUser })
    } else {
      res
        .status(400)
        .json({ success: false, message: `user with ${userid}  not exists` })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ messae: 'Error at getting user' })
  }
})

app.listen(3000, () => {
  console.log('server running on port 3000')
})
