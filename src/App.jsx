import React, { useState } from 'react'
import LanguageContext from './components/LanguageContext'
import ThemeContext from './components/ThemeContext'
import ControlsPanel from './components/ControlsPanel'
import Header from './components/Header'
import UserProfile from './components/UserProfile'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('en')

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#121212',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    transition: 'all 0.3s ease',
  }
  const toggleLanguage = () => {
    const languages = ['en', 'ru']
    setLanguage((prevLanguage) => {
      const next = (languages.indexOf(prevLanguage) + 1) % languages.length
      return languages[next]
    })
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div style={appStyle}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
          <ControlsPanel />
          <Header />
          <UserProfile />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
