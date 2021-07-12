import React, { useContext } from 'react'
import SideBar from '../components/SideBar'

import { UserContext } from '../App'

function Feed() {
  const { currentUser, userActionDispatch } = useContext(UserContext)

  return (
    <div>
      <h1>Feed</h1>
      <h2>User: {currentUser.displayName}</h2>
      <SideBar />
    </div>
  )
}

export default Feed
