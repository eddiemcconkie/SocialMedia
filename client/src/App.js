import React, { useEffect } from 'react'
// import logo from './logo.svg';
import './App.css'
import useUser from './hooks/useUser'
import useScreenRouter, { SCREENS } from './hooks/useScreenRouter'

export const UserContext = React.createContext()
export const ScreenContext = React.createContext()

function App() {
  const [currentUser, userActionDispatch] = useUser()

  const [CurrentScreen, setCurrentScreen] = useScreenRouter()

  useEffect(() => {
    if (currentUser === null) {
      setCurrentScreen(SCREENS.SIGNIN)
    } else {
      setCurrentScreen(SCREENS.PROFILE)
    }
  }, [currentUser, setCurrentScreen])

  return (
    <div>
      <UserContext.Provider value={{ currentUser, userActionDispatch }}>
        <ScreenContext.Provider value={setCurrentScreen}>
          <CurrentScreen />
        </ScreenContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
