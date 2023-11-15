import React from 'react'
import { Link } from 'react-router-dom'

const Carrousel = () => {
  return (
  
    <section className='container'>
      <div
        id="miCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#miCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#miCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#miCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner miCarousel">
          <div className="carousel-item active">
            <div className="imagenSlide">
              <img src="img/products/fondo-mas-escuchados.webp" alt="Imagen carrousel" />
            </div>
            <div
              className="carousel-caption d-flex flex-column align-items-start"
            >
              <h4>Más escuchados</h4>
              <p>
                Encontrá los artistas más escuchados en Argentina y el mundo.
              </p>
              <Link to="/" className="btn btn-primary w-25 px-0">Conocé más</Link>                
            </div>
          </div>

          <div className="carousel-item">
            <div className="imagenSlide">
              <img src="img/products/fondo-novedades.webp" alt="Imagen carrousel" />
            </div>
            <div className="carousel-caption d-flex flex-column text-start">
              <h4>Novedades</h4>
              <p>
                Descubrí los últimos lanzamientos de tus artistas favoritos.
              </p>
              <a href="#" className="btn btn-primary w-25 px-0">Conocé más</a>                
            </div>
          </div>

          <div className="carousel-item">
            <div className="imagenSlide">
              <img src="img/products/fondo-ofertas.webp" alt="Imagen carrousel" />
            </div>
            <div className="carousel-caption d-flex flex-column text-start">
              <h4>Ofertas imperdibles</h4>
              <p>
                Solo por esta semana conseguí descuentos de hasta el 50% con
                tarjetas de débito y crédito.
              </p>
              <a href="#" className="btn btn-primary w-25 px-0">Conocé más</a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#miCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#miCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    
  )
}

export default Carrousel