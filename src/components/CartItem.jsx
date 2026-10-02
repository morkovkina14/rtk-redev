import React from 'react'

const CartItem = React.memo(({ item, onIncrement, onDelete }) => {
  console.log(`Рендер CartItem`)
  return (
    <div>
      <p>
        {item.title} (Кол-во: {item.count})
      </p>
      <button onClick={() => onIncrement(item.id)}>+1</button>
      <button onClick={() => onDelete(item.id)}>Удалить</button>
    </div>
  )
})

export default CartItem

// useMemo кэширует массив элементов и сохраняет ссылку на него
// если зависимости не поменялись-ререндера не происходитю
