import React, { useState } from 'react'
import TaskItem from './TaskItem'

const Tasks = () => {
  const [tasks, setTasks] = useState(['Купить хлеб', 'Погулять с собакой'])

  const addTask = () => {
    const randomTasks = ['разобрать тему', 'сделать дз', 'приготовить обед']
    const randomIndex = Math.floor(Math.random() * randomTasks.length)
    const randomTask = randomTasks[randomIndex]
    setTasks((prevTasks) => [...prevTasks, randomTask])
  }

  const deleteTask = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task, index) => index !== prevTasks.length - 1)
    )
  }

  return (
    <div>
      <h1>Список задач</h1>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
      <button onClick={addTask}>Добавить задачу</button>
      <button onClick={deleteTask}>Удалить последнюю задачу</button>
    </div>
  )
}

export default Tasks
