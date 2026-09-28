import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import LanguageContext from './LanguageContext'

const ControlsPanel = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { language, toggleLanguage } = useContext(LanguageContext)
  return (
    <div>
      <button onClick={toggleTheme}>
        Тема:{theme === 'light' ? 'Светлая' : 'Тёмная'}
      </button>
      <button onClick={toggleLanguage}>Язык:{language}</button>
    </div>
  )
}

export default ControlsPanel
