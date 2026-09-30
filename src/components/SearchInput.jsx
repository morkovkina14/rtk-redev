import React from 'react'

const SearchInput = ({ handleChange, value }) => {
  console.log('прогрузка Input')
  return (
    <>
      <input value={value} onChange={handleChange} type="text" />
    </>
  )
}

export default React.memo(SearchInput)
