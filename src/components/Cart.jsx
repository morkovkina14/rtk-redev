import React, { useState, useCallback, useMemo } from 'react'
import CartItem from './CartItem'

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, title: 'Футболка', count: 1 },
    { id: 2, title: 'Кепка', count: 2 },
  ])

  const increment = useCallback((id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    )
  }, [])

  const deleteItem = useCallback((id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }, [])

  const clearCart = () => {
    setCart([])
  }

  const cartList = useMemo(() => {
    return cart.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        onIncrement={increment}
        onDelete={deleteItem}
      />
    ))
  }, [cart, increment, deleteItem])

  return (
    <div>
      <h1>Корзина товаров</h1>
      {cartList}
      <button onClick={clearCart}>Очистить корзину</button>
    </div>
  )
}

export default Cart
