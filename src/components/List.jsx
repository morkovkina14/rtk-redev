import React from 'react'

const List = ({ users, handleClick }) => {
  return (
    <>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.name}-{item.age}
            <button onClick={() => handleClick(item.id)}>!!!</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List
