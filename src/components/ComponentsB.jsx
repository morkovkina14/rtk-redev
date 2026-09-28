import React, { useContext } from 'react'
import Theme from './Theme'

const ComponentsB = () => {
  const { state, toggle } = useContext(Theme)
  const styleB = {
    backgroundColor: state === 'light' ? '#e0e0e0' : '#444444',
    padding: '30px',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
  }
  return (
    <div style={styleB}>
      <h1>Компонент Б</h1>
      <button onClick={toggle}>
        {state === 'light' ? ' включить темную тему' : 'включить светлую тему'}
      </button>
    </div>
  )
}

export default ComponentsB
