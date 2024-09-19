import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  updatedAt: Date,
})

export const Blog = mongoose.model('Blog', blogSchema)
