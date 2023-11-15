import ThemeContext from '../contexts/ThemeContext'
import './Nosotros.css'
import { useContext, useEffect } from 'react'

const Nosotros = () => {
  useEffect(() => {
    document.title = 'MusicStore | Nosotros'
  }, [])

  const {theme} = useContext(ThemeContext)


  return (
    <main className={`bg-${theme}`}>
      <article className='container'>
        <div className='row py-4'>
          <div className="col-12">
            <h2 className="text-center text-uppercase">Disquería Music Store</h2>
          </div>

          <section className="quienesSomos">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <div className="imagenNosotros">
                <img src="../img/products/nosotros1.jpg" alt="" />
              </div>

              <div className="nosotros w-50">
                <h3>¿Quiénes somos?</h3>
                <p>En Music Store nos apasiona la música tanto como a vos. Somos más que una tienda, somos un destino para los amantes de la música. Nuestra plataforma fue creada con la misión de brindarte acceso instantáneo a un mundo lleno de melodías, ritmos y emociones.</p>

                <p>¿Qué nos hace especiales? Nuestra vasta colección abarca todos los géneros, desde clásicos atemporales hasta los últimos éxitos. Ya sea que estés buscando las canciones que marcaron tu infancia o las últimas creaciones de artistas emergentes, lo tenemos cubierto.</p>
                  
                <p>Nuestra tienda online hace que explorar y descubrir nueva música sea una experiencia emocionante. Queremos que encuentres la banda sonora perfecta para cada momento de tu vida.</p>
              </div>
            </div>
          </section>

          <section className="quienesSomos">
            <div className="container-fluid d-flex justify-content-between">
              <div className="nosotros w-50">
                <h3>Nuestra Misión</h3>
                <p>Además de nuestra increíble selección musical, también nos enorgullece brindar un servicio de alta calidad. Nuestro equipo de atención al cliente está disponible para ayudarte en cada paso del camino. Si tienes preguntas sobre cómo encontrar esa canción difícil de encontrar o necesitas asistencia técnica, estamos aquí para ayudarte.</p>
                <p>En Music Store creemos en apoyar a la comunidad musical en su totalidad. Trabajamos en estrecha colaboración con artistas y sellos discográficos para asegurarnos de que su música llegue a tus oídos de la manera más auténtica posible. Al elegirnos, estás contribuyendo al crecimiento y la diversidad de la escena musical.</p>
                <p>Únete a nosotros mientras exploramos el mundo de la música juntos. Ya seas un melómano experimentado o estés dando tus primeros pasos en el mundo de los acordes y las notas, estamos emocionados de ser parte de tu viaje musical.</p>
              </div>
                
              <img className="imgNosotros" src="../img/products/nosotros2.jpg" alt="" />
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}

export default Nosotros