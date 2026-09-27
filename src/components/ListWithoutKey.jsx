import React from 'react'
import { useState } from 'react'

const ListWithoutKey = ({ arr }) => {
  const [state, setState] = useState(() =>
    arr.map((item, index) => ({
      number: index + 1,
    }))
  )

  const addStart = () => {
    const newItem = { number: 'в начало' }
    setState([newItem, ...state])
  }

  const addEnd = () => {
    const newItem = { number: 'в конец' }
    setState([...state, newItem])
  }

  const deleteFirst = () => {
    if (state.length === 0) return
    const [, ...rest] = state
    setState(rest)
  }

  const mix = () => {
    const mixArr = [...state].sort(() => Math.random() - 0.5)
    setState(mixArr)
  }

  const random = () => {
    if (state.length === 0) return
    const randomIndex = Math.floor(Math.random() * state.length)
    const randomUpdated = state.map((item, index) => {
      if (index === randomIndex) {
        return { ...item, number: `${item.number} - обновился` }
      }
      return item
    })
    setState(randomUpdated)
  }

  return (
    <>
      <div>
        <button onClick={addStart}>Добавить элемент в начало</button>
        <button onClick={addEnd}>Добавить элемент в конец</button>
        <button onClick={deleteFirst}>Удалить первый</button>
        <button onClick={mix}>Перемешать список</button>
        <button onClick={random}>Обновить случайный элемент</button>
      </div>
      <ul>
        {state.map((item, index) => (
          <li key={index}>
            Ключ индекс:{index}-Номер элемента:{item.number}
            <input type="text" />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListWithoutKey
