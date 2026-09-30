import React, { useMemo } from 'react'

const ItemList = ({ items = [], filterI = '' }) => {
  const filterItems = useMemo(() => {
    console.log('прогрузка itemList')
    if (filterI.trim() === '') {
      return items
    }
    const element = filterI.toLowerCase().trim()
    const isStrict = filterI.endsWith(' ')
    return items.filter((item) => {
      const itemName = item.name.toLowerCase()
      if (isStrict) {
        const cleanNumber = itemName.replace(/[^0-9]/g, '')
        return itemName === element || cleanNumber === element
      } else {
        return itemName.includes(element)
      }
    })
  }, [items, filterI])

  return (
    <>
      <ol>
        {filterItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
    </>
  )
}

export default React.memo(ItemList)
