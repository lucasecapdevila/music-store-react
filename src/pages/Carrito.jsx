import './Carrito.css'
import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import CarritoContext from '../contexts/CarritoContext'
import ItemCarrito from '../components/ItemCarrito'
import ThemeContext from '../contexts/ThemeContext'

const Carrito = () => {
  useEffect(() => {
    document.title = 'MusicStore | Carrito'
  }, [])

  const {theme} = useContext(ThemeContext)

  const {
    carrito,
    cantidadArticulosCarritoContext,
    precioArticulosCarritoContext,
    precioEnvioCarritoContext,
    precioFinal,
    guardarCarritoContext
  } = useContext(CarritoContext)

  


  return (
    <>
      <main className={`bg-${theme}`}>
        <section className="encabezadoCarrito">
          <div className="d-flex justify-content-between align-items-center p-3">
            <h3 className="text-uppercase" id="articulos"></h3>
            <Link className="linkCorregido text-uppercase" to="/"><i className="fa-solid fa-chevron-left me-2"></i>Continuar Comprando</Link>
          </div>
        </section>

        <section className="container d-flex justify-content-around carrito">
          <div className="productosEnCarrito my-4" id="lista-compra">
            <h4 className="text-center display-6 text-danger" id="productos-agregados">Carrito - {cantidadArticulosCarritoContext()} artículos</h4>            
            
            {
              carrito && carrito.map(item => (
                <ItemCarrito key={item.id} itemProducto={item} />
              ))
            }

          </div>

          <div className="resumen mt-4">
            <div className="detalleResumen d-flex flex-column p-3">
              <h4 className="text-uppercase">Resumen del pedido</h4>
              <div className="d-flex justify-content-between">
                <p>Productos</p>
                <p><span id="sub-total">${precioArticulosCarritoContext().toFixed(2)}</span></p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Envío (10%)</p>
                <p className="text-danger">${precioEnvioCarritoContext(precioArticulosCarritoContext()).toFixed(2)}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p><span>${precioFinal(precioArticulosCarritoContext(), precioEnvioCarritoContext(precioArticulosCarritoContext())).toFixed(2)}</span></p>
              </div>
              <input type="text" placeholder="Ingrese su código de Promoción" />
              <h5 className="text-uppercase mt-2">Medios de Pago Aceptados</h5>
              <div className="d-flex justify-content-start mb-4">
                <img src="../img/icons/amex.svg" alt="American Express" />
                <img src="../img/icons/hsbc.svg" alt="HSBC" />
                <img src="../img/icons/mastercard.svg" alt="MasterCard" />
                <img src="../img/icons/santander.svg" alt="Santander" />
                <img src="../img/icons/visa.svg" alt="Visa" />
              </div>
              <button 
                type='button' 
                className="btn btn-danger text-uppercase"
                onClick={guardarCarritoContext}>
                  Procesar compra
                </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-center">Nuestras Recomendaciones</h2>
          <div className="container pb-3">
            <div className="row justify-content-around">
              <div className={`card col-2 bg-${theme}`}>
                <img src="../img/products/cd-am-live.webp" className="imagenCard" alt="Portada álbum" />
                <div className="card-body">
                  <h5 className="card-title">$999.99</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">6 cuotas de $999.99</h6>
                  <p className="card-text">Arctic Monkeys - Live At The Royal Albert Hall (2020) Cd Nuevo</p>
                  <Link to="/" className="btn btn-primary agregar-carrito">Agregar al Carrito</Link>                
                </div>
              </div>
      
              <div className={`card col-2 bg-${theme}`}>
                <img src="../img/products/cd-eddie-vader.webp" className="imagenCard" alt="Portada álbum" />
                <div className="card-body">
                  <h5 className="card-title">$999.99</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">6 cuotas de $999.99</h6>
                  <p className="card-text">Eddie Vedder - Ukulele Songs (2011) Cd Cerrado Original</p>
                  <Link to="/" className="btn btn-primary agregar-carrito">Agregar al Carrito</Link>                
                </div>
              </div>
              
              <div className={`card col-2 bg-${theme}`}>
                <img src="../img/products/cd-david-bowie.webp" className="imagenCard" alt="Portada álbum" />
                <div className="card-body">
                  <h5 className="card-title">$999.99</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">6 cuotas de $999.99</h6>
                  <p className="card-text">David Bowie - Brilliant Adventure Ep (2021) Cd Nuevo Importado Rsd</p>
                  <Link to="/" className="btn btn-primary agregar-carrito">Agregar al Carrito</Link>                
                </div>
              </div>
              
              <div className={`card col-2 bg-${theme}`}>
                <img src="../img/products/cd-megadeth.webp" className="imagenCard" alt="Portada álbum" />
                <div className="card-body">
                  <h5 className="card-title">$999.99</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">6 cuotas de $999.99</h6>
                  <p className="card-text">Megadeth - Warheads On Foreheads (3 Cd's) Nuevo Original</p>
                  <Link to="/" className="btn btn-primary agregar-carrito">Agregar al Carrito</Link>                
                </div>
              </div>
              
              <div className={`card col-2 bg-${theme}`}>
                <img src="../img/products/cd-qotsa.webp" className="imagenCard" alt="Portada álbum" />
                <div className="card-body">
                  <h5 className="card-title">$999.99</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">6 cuotas de $999.99</h6>
                  <p className="card-text">Queens Of The Stone Age - Villains (2017) Cd Nuevo Edición Especial</p>
                  <Link to="/" className="btn btn-primary agregar-carrito">Agregar al Carrito</Link>                
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Carrito