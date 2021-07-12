import { useReducer } from 'react'

import userData from '../data/userData'

export const USER_ACTIONS = {
  SIGN_IN: 'sign in',
  SIGN_OUT: 'sign out',
  ADD_FRIEND: 'add friend',
  REMOVE_FRIEND: 'remove friend'
}

const { SIGN_IN, SIGN_OUT, ADD_FRIEND, REMOVE_FRIEND } = USER_ACTIONS

function reducer(state, action) {
  const {
    type,
    payload: { friendId, username, password }
  } = action
  let updatedUser
  if (state !== null) {
    switch (type) {
      case ADD_FRIEND:
        updatedUser = { ...state, friends: [...state.friends, friendId] }
        console.log(`Added friend ${friendId}. Current user: ${updatedUser}`)
        return updatedUser

      case REMOVE_FRIEND:
        const indexOfFriend = state.friends.indexOf(friendId)
        updatedUser = {
          ...state,
          friends: state.friends.splice(indexOfFriend, 1)
        }
        console.log(`Removed friend ${friendId}. Current user: ${updatedUser}`)
        return updatedUser

      case SIGN_OUT:
        return null
      default:
        return state
    }
  } else {
    if (type === SIGN_IN) {
      const userIndex = userData.findIndex((user) => {
        return user.username === username && user.password === password
      })
      const userSignedIn = userIndex >= 0 ? userData[userIndex] : null
      return userSignedIn
    }
  }
}

function useUser() {
  const [user, dispatch] = useReducer(reducer, null)

  return [user, dispatch]
}

export default useUser
