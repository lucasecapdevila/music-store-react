import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'

const NoEncontrada = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <main className={`bg-${theme}`}>
      <section className='container d-flex flex-column align-items-center'>
        <h3 className='text-center display-3 p-2'>Lo sentimos ! No pudimos encontrar la página que está buscando</h3>
        <div className='d-flex justify-content-center'>
          <img src="/img/error-404.webp" className='img-fluid' alt="Error 404" />
        </div>

        <Link to='/' className='btn btn-primary px-3 my-4 w-25'>Volver al inicio</Link>

      </section>
    </main>
  )
}

export default NoEncontrada