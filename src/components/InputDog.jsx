import React from 'react'

const InputDog = ({ count, handleChange }) => {
  return (
    <>
      <label>
        Показать:
        <input
          type="number"
          min="1"
          max="50"
          value={count}
          onChange={handleChange}
        />
      </label>
    </>
  )
}

export default InputDog
