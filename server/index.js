import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import UserRouter from './routes/user.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/user', UserRouter)

const PORT = process.env.PORT || 5000
const CONNECTION_URI = process.env.CONNECTION_URI

const connectToDatabase = async () => {
  try {
    await mongoose.connect(CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    app.listen(PORT, () => {
      console.log(`Connected to database. Server running on port ${PORT}`)
    })
  } catch (err) {
    console.error(err)
  }
}
connectToDatabase()
