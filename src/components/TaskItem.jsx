import React from 'react'

const TaskItem = React.memo(({ task }) => {
  console.log(`Рендер TaskItem`)
  return <li>{task}</li>
})

export default TaskItem
