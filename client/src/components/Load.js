import React, { useState } from 'react'

async function loadData(setLoading) {
  const sleep = (m) => new Promise((r) => setTimeout(r, m))
  await sleep(3000)
  setLoading(false)
}

function Load() {
  const [loading, setLoading] = useState(true)
  loadData(setLoading)
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Done!</h1>
      </div>
    )
  }
}

export default Load
