import express from 'express'

import {
  createBlog,
  deleteBlog,
  getBlogById,
  getBlogs,
  updateBlog,
} from '../controllers/blogController.js'

const route = express.Router()

route.get('/blogs', getBlogs)

route.post('/blogs', createBlog)

route.get('/blogs/:blogid', getBlogById)

route.patch('/blogs/:blogid', updateBlog)

route.delete('/blogs/:blogid', deleteBlog)

export default route
