import React from 'react'

const UserInfo = React.memo(({ user }) => {
  console.log('Рендер UserInfo')
  return (
    <div>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? 'Да' : 'Нет'}</p>
    </div>
  )
})

export default UserInfo
