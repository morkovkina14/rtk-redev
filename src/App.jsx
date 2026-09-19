
import React, { useRef, useState } from 'react'
import List from './components/List'

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ola', age: 27 },
    { id: 2, name: 'Masha', age: 32 },
    { id: 3, name: 'Pasha', age: 45 },
  ])

  const handleClick = (id) => {
    const newList = users.map((item) => {
      if (item.id === id) {
        return { ...item, name: `!!!${item.name}` }
      }
      return item
    })
    setUsers(newList)
  }

  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.focus()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const text = inputRef.current.value
      if (text.trim() !== '') {
        const newUser = {
          id: Date.now(),
          name: text,
          age: '',
        }
        setUsers([...users, newUser])

        inputRef.current.value = ''
      }
    }

  }

  return (
    <div>
      <input type="text" ref={inputRef} onKeyDown={handleKeyDown} />
      <button onClick={handleFocus}>Фокус</button>
      <List users={users} handleClick={handleClick} />

    </div>
  )
}

export default App
