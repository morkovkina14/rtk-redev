import React from 'react'

const CounterButton = ({ increment }) => {
  console.log('прогрузка Button')
  return (
    <>
      <button onClick={increment}>+1</button>
    </>
  )
}

export default React.memo(CounterButton)
