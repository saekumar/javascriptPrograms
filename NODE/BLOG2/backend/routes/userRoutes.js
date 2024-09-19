import express from 'express'
import { User } from '../models/UserSchema.js'
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../controllers/userController.js'

const route = express.Router()
route.post('/users', createUser)

route.get('/users', getAllUsers)

route.get('/users/:userid', getUserById)

route.patch('/users/:id', updateUser)

route.delete('/users/:id', deleteUser)

export default route
