const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.json())
let blogs = []
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
  console.log('server started')
})
