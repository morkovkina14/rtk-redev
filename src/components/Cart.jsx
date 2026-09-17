import React, { useState } from 'react'

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, title: 'Футболка', count: 1 },
    { id: 2, title: 'Кепка', count: 2 },
  ])

  const increment = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    )
  }

  const deleteItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }
  const clearCart = () => {
    setCart([])
  }

  return (
    <div>
      <h1>Корзина товаров</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} (Кол-во: {item.count})
          </p>
          <button onClick={() => increment(item.id)}>+1</button>
          <button onClick={() => deleteItem(item.id)}>Удалить</button>
        </div>
      ))}
      <button onClick={clearCart}>Очистить корзину</button>
    </div>
  )
}

export default Cart
