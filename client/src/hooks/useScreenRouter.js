import React, { useState } from 'react'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'
import Feed from '../pages/Feed'

export const SCREENS = {
  SIGNIN: 'Sign in',
  PROFILE: 'Profile',
  FEED: 'Feed'
}

const { SIGNIN, PROFILE, FEED } = SCREENS

function useScreenRouter() {
  const [currentScreen, setCurrentScreen] = useState(SIGNIN)

  function CurrentScreen() {
    // const { screen } = props
    switch (currentScreen) {
      case SIGNIN:
        return <SignIn />
      case PROFILE:
        return <Profile />
      case FEED:
        return <Feed />
      default:
        return <SignIn />
    }
  }

  return [CurrentScreen, setCurrentScreen]
}

export default useScreenRouter
