import React from 'react'

const SelectDog = ({ breeds, onChangeS }) => {
  return (
    <>
      <label>
        Порода:
        <select onChange={(e) => onChangeS(e.target.value)}>
          <option value="all">Все породы</option>
          {breeds.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </>
  )
}

export default SelectDog
