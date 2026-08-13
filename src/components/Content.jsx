import React from 'react';

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

export {Section, MainContent} 