import React from 'react'
import { useState } from 'react'
import ListWithoutKey from './components/ListWithoutKey'
import ListWithKey from './components/ListWithKey'

const App = () => {
  const arr = Array.from({ length: 1000 })
  const [state, setState] = useState(true)
  const handleClick = () => {
    setState((prevState) => !prevState)
  }
  return (
    <div>
      <button onClick={handleClick}>
        {state ? 'KEY = INDEX' : 'KEY = ID.ITEM'}
      </button>
      {state ? <ListWithoutKey arr={arr} /> : <ListWithKey arr={arr} />}
    </div>
  )
}

export default App
