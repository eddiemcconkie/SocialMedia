import User from '../models/user.js'

// export function updateUser(req, res) {
//   console.log(req.body)
//   UserModel.findByIdAndUpdate(req.body._id, req.body, (err, result) => {
//     if (err) {
//       res.send(err)
//     } else {
//       res.send(result)
//     }
//   })
// }

export async function updateUser(req, res) {
  // const id = req.body._id

  const newUser = new User(req.body)

  try {
    // await User.findByIdAndUpdate(id, req.body, { upsert: true }).exec()
    await User.findOneAndUpdate({ username: req.body.username }, req.body, {
      upsert: true
    })
    // await newUser.save()
    console.log(req.body)
    res.send('Successfully updated!')
  } catch (error) {
    console.log(error)
  }
}
