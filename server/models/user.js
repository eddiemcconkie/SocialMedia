import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  displayName: String,
  friends: [String],
  posts: [Number]
})

const User = mongoose.model('User', userSchema)

export default User
