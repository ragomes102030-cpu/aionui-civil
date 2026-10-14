import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Header, Hero, useTheme } from './components/Chrome'
import { Assistants, Cowork, Remote, Cron, Platform, Contributors, Faq, Final, Footer } from './components/Sections'

function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <Header theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <Cowork />
        <Assistants />
        <Remote />
        <Cron />
        <Platform />
        <Contributors />
        <Faq />
        <Final />
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
