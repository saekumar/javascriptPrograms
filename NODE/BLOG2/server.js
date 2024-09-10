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
        Success: true,
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
    if (users) res.status(200).json({ users })
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

app.get('/blogs', (req, res) => {
  try {
    fs.readFile(
      __dirname + '/blogs.json',
      { encoding: 'utf-8' },
      (err, blogs) => {
        if (err) {
          res.status(400).json({ message: 'Error at getting blogs' })
        } else {
          blogs = blogs ? JSON.parse(blogs) : []
          res.status(200).json(blogs)
        }
      }
    )
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error at getting blogs' })
  }
})

app.post('/blogs', (req, res) => {
  try {
    fs.readFile(
      __dirname + '/blogs.json',
      { encoding: 'utf-8' },
      (err, blogs) => {
        if (err) {
          res.status(400).json({ message: 'Error at getting blogs' })
        } else {
          blogs = blogs ? JSON.parse(blogs) : []
          blogs.push({ ...req.body, postid: blogs.length + 1 })
          fs.writeFile(
            __dirname + '/blogs.json',
            JSON.stringify(blogs),
            (err) => {
              if (err) {
                res.status(400).json({ message: 'Error at Posting blog' })
              } else {
                res.status(200).json({ message: 'Blog posted' })
              }
            }
          )
        }
      }
    )
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error at getting blogs' })
  }
})

app.delete('/blogs/:userid/:postid', (req, res) => {
  try {
    let { userid, postid } = req.params
    userid = parseInt(userid)
    postid = parseInt(postid)
    fs.readFile(
      __dirname + '/blogs.json',
      { encoding: 'utf-8' },
      (err, blogs) => {
        blogs = blogs ? JSON.parse(blogs) : []
        blogs = blogs.filter(
          (blog) => !(blog.author.userid === userid && blog.postid === postid)
        )
        fs.writeFile(
          __dirname + '/blogs.json',
          JSON.stringify(blogs),
          (err) => {
            if (err) {
              res.status(400).json({ message: 'Error at Deleting post' })
            } else {
              res.status(200).json({ message: 'Deleted Successfully' })
            }
          }
        )
      }
    )
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error at deleting blogs' })
  }
})

app.put('/blogs/:userid/:postid', (req, res) => {
  try {
    let { userid, postid } = req.params
    let { title, content } = req.body
    userid = parseInt(userid)
    postid = parseInt(postid)

    fs.readFile(
      __dirname + '/blogs.json',
      { encoding: 'utf-8' },
      (err, blogs) => {
        blogs = blogs ? JSON.parse(blogs) : []
        let idx = blogs.findIndex(
          (blog) => blog.author.userid === userid && blog.postid === postid
        )
        blogs[idx].title = title
        blogs[idx].content = content

        fs.writeFile(
          __dirname + '/blogs.json',
          JSON.stringify(blogs),
          (err) => {
            if (err) {
              res.status(400).json({ message: 'Error at updating blog' })
            } else {
              res.status(200).json({ message: 'Blog updated successfully' })
            }
          }
        )
      }
    )
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error at Updating blog' })
  }
})

app.listen(3000, () => {
  console.log('server running on port 3000')
  connectDb()
})
