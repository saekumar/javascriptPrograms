import { User } from '../models/UserSchema.js'

export const createUser = async (req, res) => {
  try {
    let { name, email, password } = req.body
    if (!name || !email || !password) {
      res.status(400).json({
        Success: false,
        message: 'Please fill all the details',
      })
    } else {
      const newUser = await User.create({ name, email, password })
      res.status(200).json({
        success: true,
        message: 'User added successfully',
        newUser,
      })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ messae: 'Error at adding user' })
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    if (users) {
      res.status(200).json({
        success: true,
        message: 'Users fetched successfully',
        users,
      })
    } else {
      res
        .status(400)
        .json({ success: false, message: 'Error at fetching users' })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ messae: 'Error at getting users' })
  }
}

export const getUserById = async (req, res) => {
  try {
    let { userid } = req.params

    let filteredUser = await User.findById(userid)

    if (filteredUser) {
      res.status(200).json({
        success: true,
        message: 'User details fetched successfully',
        filteredUser,
      })
    } else {
      res.status(400).json({
        success: false,
        message: 'Error at getting user',
      })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Error at getting user',
      err: error.message,
    })
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    let { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all the details',
      })
    }
    const user = await User.findById(id)
    if (!user) {
      return res.status(400).json({
        success: false,
        message: `Cannot fetch user with this id ${id} `,
      })
    }
    const updatedUser = await User.findByIdAndUpdate(id, {
      name,
      password,
      email,
    })
    console.log(updatedUser)
    return res.status(200).json({
      success: true,
      message: 'User updated Successfully',
      updatedUser,
    })
  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: 'Error at Updating User Details',
      error: err.message,
    })
  }
}

export const deleteUser = async (req, res) => {
  try {
    let { id } = req.params

    const deleteUser = await User.findByIdAndDelete(id)

    if (!deleteUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found, unable to delete',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'User Deleted Successfully',
      deleteUser,
    })
  } catch (err) {
    console.log(err)

    return res.status(500).json({
      success: false,
      message: 'Error at Deleting User',
      error: err.message,
    })
  }
}
