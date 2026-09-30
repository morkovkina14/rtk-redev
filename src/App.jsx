import React, { useState, useCallback } from 'react'
import SearchInput from './components/SearchInput'
import ItemList from './components/ItemList'
import CounterButton from './components/CounterButton'

const arr = Array.from({ length: 101 }, (_, index) => ({
  id: `id: ${index + 1}`,
  name: `Элемент: ${index + 1}`,
}))
const App = () => {
  const [state1, setState1] = useState('')
  const [state2, setState2] = useState(0)

  const handleChange = useCallback((e) => {
    setState1(e.target.value)
  }, [])

  const increment = useCallback(() => {
    setState2((prevState2) => prevState2 + 1)
  }, [])

  return (
    <div>
      <CounterButton increment={increment} />
      <p>Клик:{state2}</p>
      <SearchInput handleChange={handleChange} value={state1} />
      <ItemList items={arr} filterI={state1} />
    </div>
  )
}

export default App
