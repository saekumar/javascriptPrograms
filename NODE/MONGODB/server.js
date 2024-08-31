require('dotenv').config()
const express = require('express')

const mongoose = require('mongoose')

const app = express()

async function connectDb() {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Db connected Successfully')
  } catch (error) {
    console.log(error)
  }
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})

const User = mongoose.model('user', userSchema)

async function crudOnUsers() {
  //Create User
  //   let newUser = await User.create({
  //     name: 'Saikumar1',
  //     email: 'saikumar1@gmail.com',
  //     password: '12334',
  //   })
  //    Read All Users
  //   let users = await User.find()
  //   console.log(users)
  //   get User by id. By default mongodb creates an uniue id(_id).
  //   let userById = await User.findById('66d1a84bea11c58c09f0225a')
  //   console.log(userById)

  let user = await User.find({ name: 'Saikumar' })
  console.log(user)
}

app.listen(3000, () => {
  console.log('server started at port 3000')
  connectDb()
  crudOnUsers()
})
