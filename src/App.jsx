import React, { useState } from 'react'
import Theme from './components/Theme'
import ComponentsA from './components/ComponentsA'

const App = () => {
  const [state, setState] = useState('light')
  const toggle = () => {
    setState((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }

  return (
    <div>
      <Theme.Provider value={{ state, toggle }}>
        <ComponentsA />
      </Theme.Provider>
    </div>
  )
}

export default App
