import React from 'react'
import ClickPractice from './components/ClickPractice'
import InputPractice from './components/InputPractice'
import FormPractice from './components/FormPractice'
import ActionButton from './components/ActionButton'

const App = () => {
  const handleSave = () => {
    console.log('Сохранено')
  }

  const handleDelete = () => {
    console.log('Удалено')
  }

  return (
    <div>
      <ClickPractice />
      <InputPractice />
      <FormPractice />
      <ActionButton text="Сохранить" onClick={handleSave} />
      <ActionButton text="Удалить" onClick={handleDelete} />
    </div>
  )
}

export default App
