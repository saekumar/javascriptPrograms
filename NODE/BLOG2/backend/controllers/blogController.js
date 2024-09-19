import { Blog } from '../models/BlogSchema.js'

export const getBlogs = async (req, res) => {
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
    return res.status(200).json({
      success: true,
      message: 'Successfully fetched All bLogs',
      blogs,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error at getting blogs' })
  }
}

export const createBlog = async (req, res) => {
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
}

export const getBlogById = async (req, res) => {
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
}

export const updateBlog = async (req, res) => {
  try {
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
}

export const deleteBlog = async (req, res) => {
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
}
