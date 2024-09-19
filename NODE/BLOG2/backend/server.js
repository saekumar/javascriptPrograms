import express from 'express'
import cors from 'cors'
import connectDB from './config/connectDB.js'
import UserRoute from './routes/userRoutes.js'
import BlogRoute from './routes/blogRoutes.js'
const app = express()
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
)

app.use('/', UserRoute)
app.use('/', BlogRoute)

app.listen(3000, () => {
  console.log('server running on port 3000')
  connectDB()
})
