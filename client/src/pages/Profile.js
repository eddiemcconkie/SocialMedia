import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../components/SideBar'

import { UserContext } from '../App'

import userData from '../data/userData'

async function requestFriends(friends) {
  let friendList = []
  userData.forEach((user) => {
    if (friends.includes(user.username)) {
      friendList.push(user)
    }
  })
  return friendList
}

function Profile() {
  const { currentUser, userActionDispatch } = useContext(UserContext)
  const [friendList, setFriendList] = useState([])

  useEffect(() => {
    const loadFriends = async () => {
      setFriendList(await requestFriends(currentUser.friends))
    }
    loadFriends()
  }, [])

  return (
    <div>
      <h1>Profile</h1>
      <h2>Hello, {currentUser.displayName}!</h2>
      <h3>Friends</h3>
      <ul>
        {friendList.map((friend) => {
          return <li key={friend.username}>{friend.displayName}</li>
        })}
      </ul>
      <SideBar />
    </div>
  )
}

export default Profile
