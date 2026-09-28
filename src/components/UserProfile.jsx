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

const UserProfile = () => {
  const { theme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)
  const currentTranslation = translations[language] || translations.en

  const profileCardStyle = {
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    backgroundColor: theme === 'light' ? '#ffffff' : '#1e222b',
    color: theme === 'light' ? '#333333' : '#ffffff',
    border: theme === 'light' ? '1px solid #e0e0e0' : '1px solid #333a4d',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  }

  return (
    <div style={profileCardStyle}>
      <p>{currentTranslation.welcome}</p>
    </div>
  )
}

export default UserProfile
