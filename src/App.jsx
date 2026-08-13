import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Header = () => {
  return (
    <header>
      <h1>Компоненты</h1>
    </header>
  )
}

const Section = () => {
  return (
    <section>
      <h2>Виды компонентов:</h2>
      <p>1.Функциональные</p>
      <p>2.Классовые</p>
    </section>
  )
}

const MainContent = () => {
  return (
    <main>
      <p>Это отдельные переиспользуемые блоки кода.</p>
      <Section />
    </main>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>{new Date().getFullYear()}</p>
    </footer>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;