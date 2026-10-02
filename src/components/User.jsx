import React, { useState, useCallback } from 'react'
import UserInfo from './UserInfo'

const User = () => {
  const [user, setUser] = useState({
    name: 'Иван',
    age: 25,
    isActive: true,
  })

  const increment = useCallback(() => {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }))
  }, [])
  // из-за useCallback- ф. не пересоздаются заново(ссылка не меняется)-ререндера не происходит.

  const activ = useCallback(() => {
    setUser((prevUser) => ({ ...prevUser, isActive: !prevUser.isActive }))
  }, [])

  const firstName = useCallback(() => {
    setUser((prevUser) => ({
      ...prevUser,
      name: prevUser.name === 'Иван' ? 'Ольга' : 'Иван',
    }))
  }, [])

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <UserInfo user={user} />
      <button onClick={firstName}>Сменить имя</button>
      <button onClick={increment}>Увеличить возраст на 1</button>
      <button onClick={activ}>Переключить активность</button>
    </div>
  )
}

export default User
