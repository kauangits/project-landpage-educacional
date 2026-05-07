import { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })
  useEffect(() => {
    console.log('THEME ATUAL:', theme)

    document.documentElement.classList.add('theme-transition')

    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 300)

    return () => clearTimeout(timeout)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
