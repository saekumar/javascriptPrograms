import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://saikumarpuppala249:1234@cluster0.4twfo.mongodb.net/blogsdatabase'
    )
    console.log('Database connected successfully')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB
