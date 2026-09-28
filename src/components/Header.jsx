import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import LanguageContext from './LanguageContext'

const translations = {
  en: {
    welcome: 'Welcome',
    profile: 'Your profile',
  },
  ru: {
    welcome: 'Добро пожаловать',
    profile: 'Твой профиль',
  },
}

const Header = () => {
  const { theme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)

  const currentTranslation = translations[language] || translations.en
  const headerStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: theme === 'light' ? '#1e222b' : '#ffffff',
    transition: 'color 0.3s ease',
  }
  return <header style={headerStyle}>{currentTranslation.welcome}</header>
}

export default Header
