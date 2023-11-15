import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()

const temaInicial = 'light'

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(temaInicial)

  const handleTheme = () => {
    (theme === 'light') ? setTheme ('dark') : setTheme(temaInicial)
    document.body.setAttribute('data-bs-theme', theme)
    localStorage.setItem('modo', theme)
  }

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme)
    localStorage.setItem('modo', theme)
  }, [theme])

  const modoLS = () => {
    let itemLS = localStorage.getItem('modo')
    if(itemLS === null){
      localStorage.setItem('modo', 'light')
    } else if(localStorage.setItem('modo', 'light') === 'dark'){
      setTheme('dark')
      document.body.setAttribute('data-bs-theme', 'dark')
    }
  }

  const data = {theme, handleTheme, modoLS}

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export {ThemeProvider}
export default ThemeContext