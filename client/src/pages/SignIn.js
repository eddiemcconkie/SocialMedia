import React, { useState, useContext } from 'react'
// import SideBar from '../components/SideBar'
// import useUser from '../hooks/useUser'
import { UserContext } from '../App'

import { USER_ACTIONS } from '../hooks/useUser'

function SignIn() {
  const { currentUser, userActionDispatch } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1>Sign In</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const username = e.target.username.value
          const password = e.target.password.value
          userActionDispatch({
            type: USER_ACTIONS.SIGN_IN,
            payload: { username, password }
          })
          setPassword('')
        }}
      >
        <label>
          Username
          <input
            type="text"
            name="username"
            value={username}
            required
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
        {/* {currentUser} */}
      </form>
      {/* <SideBar /> */}
    </div>
  )
}

export default SignIn
