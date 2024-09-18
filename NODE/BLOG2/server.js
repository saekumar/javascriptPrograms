const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
)

async function connectDb() {
  try {
    await mongoose.connect(
      'mongodb+srv://saikumarpuppala249:1234@cluster0.4twfo.mongodb.net/blogsdatabase'
    )
    console.log('Datbase connected Successfully')
  } catch (error) {
    console.log('error while connection database', error)
  }
}

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
})

const User = mongoose.model('users', userSchema)

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  updatedAt: Date,
})

const Blog = mongoose.model('nodeblogs', blogSchema)
app.post('/users', async (req, res) => {
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
})

app.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    if (users) {
      res
        .status(200)
        .json({ success: true, message: 'Users fetched successfully', users })
    } else {
      res
        .status(400)
        .json({ success: false, message: 'Error at fetching users' })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ messae: 'Error at getting users' })
  }
})

app.get('/twousers', async (req, res) => {
  try {
    let usersperPage = req.query.users
    let pagenmbr = req.query.page
    let skip = usersperPage * pagenmbr
    let result = await User.find().skip(skip).limit(usersperPage)
    mongoose.connection.db.listCollections().toArray((name) => {
      console.log(name)
    })

    res.status(200).json({ message: 'Got the users', result })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Something went wrong' })
  }
})

app.get('/users/:userid', async (req, res) => {
  try {
    let { userid } = req.params
    // userid = parseInt(userid)
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
        err: error.message,
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
})

app.patch('/users/:id', async (req, res) => {
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
})

app.delete('/users/:id', async (req, res) => {
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
})

app.get('/blogs', async (req, res) => {
  try {
    // fs.readFile(
    //   __dirname + '/blogs.json',
    //   { encoding: 'utf-8' },
    //   (err, blogs) => {
    //     if (err) {
    //       res.status(400).json({ message: 'Error at getting blogs' })
    //     } else {
    //       blogs = blogs ? JSON.parse(blogs) : []
    //       res.status(200).json(blogs)
    //     }
    //   }
    // )
    const blogs = await Blog.find()
    if (!blogs | (blogs.length === 0)) {
      return res
        .status(400)
        .json({ success: false, message: 'Blogs are Empty' })
    }
    return res
      .status(200)
      .json({ success: true, message: 'Successfully fetched All bLogs', blogs })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error at getting blogs' })
  }
})

app.post('/blogs', async (req, res) => {
  try {
    // fs.readFile(
    //   __dirname + '/blogs.json',
    //   { encoding: 'utf-8' },
    //   (err, blogs) => {
    //     if (err) {
    //       res.status(400).json({ message: 'Error at getting blogs' })
    //     } else {
    //       blogs = blogs ? JSON.parse(blogs) : []
    //       blogs.push({ ...req.body, postid: blogs.length + 1 })
    //       fs.writeFile(
    //         __dirname + '/blogs.json',
    //         JSON.stringify(blogs),
    //         (err) => {
    //           if (err) {
    //             res.status(400).json({ message: 'Error at Posting blog' })
    //           } else {
    //             res.status(200).json({ message: 'Blog posted' })
    //           }
    //         }
    //       )
    //     }
    //   }
    // )

    const { title, description } = req.body
    if (!title | !description) {
      return res
        .status(400)
        .json({ success: false, message: 'Title or Description is missing' })
    }
    const newBlog = await Blog.create({
      title,
      description,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })
    if (!newBlog) {
      return res
        .status(400)
        .json({ success: false, message: 'Error at creating New Blog' })
    }
    return res
      .status(200)
      .json({ success: true, message: 'Blog Created Successfully', newBlog })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error at getting blogs' })
  }
})

app.get('/blogs/:blogid', async (req, res) => {
  try {
    // let { userid, postid } = req.params
    // userid = parseInt(userid)
    // postid = parseInt(postid)
    // fs.readFile(
    //   __dirname + '/blogs.json',
    //   { encoding: 'utf-8' },
    //   (err, blogs) => {
    //     blogs = blogs ? JSON.parse(blogs) : []
    //     blogs = blogs.filter(
    //       (blog) => !(blog.author.userid === userid && blog.postid === postid)
    //     )
    //     fs.writeFile(
    //       __dirname + '/blogs.json',
    //       JSON.stringify(blogs),
    //       (err) => {
    //         if (err) {
    //           res.status(400).json({ message: 'Error at Deleting post' })
    //         } else {
    //           res.status(200).json({ message: 'Deleted Successfully' })
    //         }
    //       }
    //     )
    //   }
    // )

    let { blogid } = req.params
    const blog = await Blog.findById(blogid)
    if (!blog) {
      return res.status(400).json({
        success: false,
        message: `Cannot fetch blog with id ${blogid}`,
      })
    }
    return res
      .status(200)
      .json({ success: true, message: 'Successfully fetched Blog', blog })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error at fetching  blog' })
  }
})

app.patch('/blogs/:blogid', async (req, res) => {
  try {
    // let { userid, postid } = req.params
    // let { title, content } = req.body
    // userid = parseInt(userid)
    // postid = parseInt(postid)

    // fs.readFile(
    //   __dirname + '/blogs.json',
    //   { encoding: 'utf-8' },
    //   (err, blogs) => {
    //     blogs = blogs ? JSON.parse(blogs) : []
    //     let idx = blogs.findIndex(
    //       (blog) => blog.author.userid === userid && blog.postid === postid
    //     )
    //     blogs[idx].title = title
    //     blogs[idx].content = content

    //     fs.writeFile(
    //       __dirname + '/blogs.json',
    //       JSON.stringify(blogs),
    //       (err) => {
    //         if (err) {
    //           res.status(400).json({ message: 'Error at updating blog' })
    //         } else {
    //           res.status(200).json({ message: 'Blog updated successfully' })
    //         }
    //       }
    //     )
    //   }
    // )

    let { blogid } = req.params
    let { title, description } = req.body
    if (!title | !description) {
      return res
        .status(400)
        .json({ success: false, message: 'Some fields are missing' })
    }
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogid,
      {
        title,
        description,
        updatedAt: Date.now(),
      },
      { new: true }
    )
    if (!updatedBlog) {
      return res
        .status(400)
        .json({ success: false, message: 'Error at updating blog' })
    }
    return res.status(200).json({
      success: true,
      message: 'Successfully updated Blog',
      updatedBlog,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error at Updating blog' })
  }
})

app.delete('/blogs/:blogid', async (req, res) => {
  try {
    let { blogid } = req.params
    console.log(blogid)
    const deletedBlog = await Blog.findByIdAndDelete(blogid)
    if (!deletedBlog) {
      return res
        .status(400)
        .json({ success: false, message: 'Error at deleting blog' })
    }
    return res.status(200).json({
      success: true,
      message: 'Successfully deleted Blog',
      deletedBlog,
    })
  } catch (error) {
    res.status(400).json({ success: false, message: 'Error at deleting blog' })
  }
})
app.listen(3000, () => {
  console.log('server running on port 3000')
  connectDb()
})
