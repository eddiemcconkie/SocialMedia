import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const PORT = process.env.PORT || 5000
const CONNECTION_URI = process.env.CONNECTION_URI

const connectToDatabase = async () => {
  try {
    await mongoose.connect(CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(PORT, () => {
      console.log(`Connected to database. Server running on port ${PORT}`)
    })
  } catch (err) {
    console.error(err)
  }
}
connectToDatabase()
