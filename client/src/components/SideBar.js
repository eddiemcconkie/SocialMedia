import React, { useContext } from 'react'
import { ScreenContext } from '../App'
import { SCREENS } from '../hooks/useScreenRouter'

// import Load from './Load'

function SideBar() {
  const setScreen = useContext(ScreenContext)
  // console.log(SCREENS)

  const screens = [SCREENS.FEED, SCREENS.PROFILE]

  return (
    <div>
      {screens.map((screen, index) => {
        return (
          <button onClick={() => setScreen(screen)} key={index}>
            {screen}
          </button>
        )
      })}
      {/* <Load /> */}
    </div>
  )
}

export default SideBar
