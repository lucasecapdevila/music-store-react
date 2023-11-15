import { Link } from 'react-router-dom'
import './Contacto.css'
import { useContext, useEffect } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const Contacto = () => {
  useEffect(() => {
    document.title = 'MusicStore | Contacto'
  }, [])

  const {theme} = useContext(ThemeContext)


  return (
    <main className={`py-5 bg-${theme}`}>
      <section className="container">
        <div className="col-12">
          <h2 className="text-center text-uppercase">Comunicate con nosotros</h2>
        </div>

        <div className="col-12 d-flex fila">
          <div className="item d-flex flex-column align-items-center justify-content-center w-50">
            <i className="fa-solid fa-phone"></i>
            <h3>Soporte Whatsapp</h3>
            <p className="text-center">Envía tu consulta a nuestro Centro de Atención. Lunes a Viernes de 09:00 hs a 18:00 hs.</p>
            <p><i className="fa-brands fa-whatsapp"></i>3865 123456</p>
          </div>

          <div className="item d-flex flex-column align-items-center justify-content-center w-50">
            <i className="fa-solid fa-location-dot" id="fa-location-dot"></i>
            <h3>Visitanos</h3>
            <p className="text-center">Podés venir a nuestro local a buscar tus discos favoritos. Lunes a Viernes de 09:00 a 18:00 hs.</p>
            <p>9 de Julio 112 - Concepción, Tucumán</p>
          </div>
            
          <div className="item d-flex flex-column align-items-center justify-content-center w-50">
            <i className="fa-solid fa-at"></i>
            <h3>Email</h3>
            <p className="text-center">Podes mandarnos todas tus consultas, quejas y/o sugerencias a nuestro mail.</p>
            <b><i className="fa-regular fa-envelope me-2"></i>contacto@musicstore.com</b>
          </div>
        </div>

        <div className="col-12 py-5">
          <p className="faq">¿Tenés dudas? Consultá <b>Preguntas Frecuentes</b></p>
        </div>        
      </section>
    </main>
  )
}

export default Contacto