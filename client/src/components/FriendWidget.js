import React, { useContext } from 'react'

import { UserContext } from '../App'
import { USER_ACTIONS } from '../hooks/useUser'

function FriendWidget(props) {
  const { friendData } = props

  const { userActionDispatch } = useContext(UserContext)

  return (
    <div>
      {/* <img href={friendData.profilePic} /> */}
      <h2>{friendData.displayName}</h2>
      {/* <button>View profile</button> */}
      <button
        onClick={() => {
          userActionDispatch({
            type: USER_ACTIONS.REMOVE_FRIEND,
            payload: { friendId: friendData.username }
          })
        }}
      >
        Remove friend
      </button>
    </div>
  )
}

export default FriendWidget
