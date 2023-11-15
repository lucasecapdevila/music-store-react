import { Link, NavLink, useNavigate } from "react-router-dom"
import ItemCarritoInicio from "./ItemCarritoInicio"
import CarritoContext from "../contexts/CarritoContext"
import { useContext, useEffect } from "react"
import ThemeContext from "../contexts/ThemeContext"

const Navbar = () => {
  const {carrito, vaciarCarritoContext} = useContext(CarritoContext)
  const {theme, handleTheme, modoLS} = useContext(ThemeContext)

  useEffect(() => {
    modoLS()
  }, [])
  

  const navigate = useNavigate()

  const handleComprar = () => {
    if(carrito.length !== 0){
      navigate('/carrito')
    } else{
      //TODO:  AGREGAR SWEET ALERT
    }
  }

  const handleVaciarCarrito = () => {
    vaciarCarritoContext()
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          {/* Logo y dirección */}

          <div className="d-flex justify-content-around align-items-center">
            <NavLink className="inicio" to="/">
              <img className="logo" src="img/logo-oscuro.png" alt="Logo" />
            </NavLink>
            <div className="ms-2">
              <p className="m-0 text-center" to="#">Enviar a Lucas<br /></p>
              <div
                className="d-flex align-items-center justify-content-center envio"
              >
                <i className="fa-solid fa-location-dot mx-1"></i>
                <address className="m-0">San Martín 1234</address>
              </div>
            </div>
          </div>

          {/* Barra de búsqueda */}

          <form className="d-flex w-50 bg-light" role="search">
            <input
              className="form-control me-auto bg-light"
              type="search"
              placeholder="Buscar artículos..."
              aria-label="Search"/>
            <button type="button" className="btn btn-light" id="btn-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <div className="d-flex w-25 justify-content-center align-items-center">
            
            {/* Menú desplageable de idiomas */}

            <div className="dropdown">
              <button
                className="btn dropdown-toggle me-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <img
                  src="img/icons/españa.svg"
                  width="20px"
                  height="auto"
                  alt="Bandera de España"
                />ES
              </button>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item px-2" to="/">
                    <img
                      src="img/icons/uk.svg"
                      width="20px"
                      height="auto"
                      alt="Bandera de UK"
                    />EN
                  </Link>
                </li>

                <li><hr className="dropdown-divider mx-1" /></li>
                <li>
                  <Link className="dropdown-item px-2" to="/">
                    <img
                      src="img/icons/portugal.svg"
                      width="20px"
                      height="auto"
                      alt="Bandera de UK"
                    />PO
                  </Link>
                </li>
              </ul>
            </div>

            {/* Descarga la app */}
            
            <Link to="/NoEncontrada" className="list-group-item me-3 hvr-underline-from-left p-2">
              Descarga la app
            </Link>
            
            {/* Botón para modo oscuro */}
            
            <button className="switch me-3 active" onClick={handleTheme}>

              {theme === 'dark' ? <span><i className="fa-solid fa-moon fa-xl hvr-pop"></i></span> : <span><i className="text-warning fa-solid fa-sun fa-xl hvr-pop"></i></span>}

              
            </button>
            
            {/* Ingresar/crear usuario */}

            <button
              type="button"
              className="btn me-3 p-0 icono-blanco"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">
              <i className="fa-regular fa-user fa-xl hvr-pop"></i>
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header d-flex flex-column border-bottom-0">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <h2
                      className="modal-title fs-3 text-uppercase mb-3"
                      id="exampleModalLabel">
                      Disfrutá de los beneficios de Music Store al iniciar
                      sesión
                    </h2>
                    <p className="fs-6">
                      Conseguí cupones de descuento, productos exclusivos y
                      promociones especiales.
                    </p>
                  </div>

                  <hr className="hr-modal mx-3 my-0" />

                  <div className="modal-body">
                    <h3 className="fs-4 text-uppercase">Iniciar sesión</h3>
                    <form className="row g-3">
                      <div className="row-md-6">
                        <label htmlFor="inputEmail4" className="form-label fs-5">
                          Email
                          <span>*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="usuario@ejemplo.com"/>
                      </div>

                      <div className="row-md-6">
                        <label htmlFor="inputPassword4" className="form-label fs-5">
                          Contraseña<span>*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Ingrese su contraseña"/>
                      </div>

                      <div className="form-check mt-1 fs-6">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          id="gridCheck1"
                        />
                        <label className="form-check-label pt-1" htmlFor="gridCheck1">
                          Mantener la sesión abierta.
                        </label>
                      </div>

                      <div className="col-12 d-grid">
                        <button
                          type="submit"
                          className="btn btn-modal text-uppercase fs-5 col-12">
                          Ingresar
                        </button>
                        <b className="mt-2 linkCorregido fs-6">
                          ¿Olvidaste tu contraseña?
                        </b>
                      </div>
                    </form>
                  </div>

                  <hr className="hr-modal mx-3 my-0" />

                  <div className="modal-footer d-block border-top-0">
                    <p className="text-center">
                      ¿No tienes cuenta?
                      <b className="linkCorregido">Registrate aquí</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carrito */}

            <div className="d-flex">
              <div className="dropdown dropstart">
                <Link
                  className="nav-link icono-blanco"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i className="fa-solid fa-cart-shopping fa-xl hvr-pop"></i>
                  <span id="carrito-contador"></span>
                </Link>
                <ul id="carrito" className="dropdown-menu mx-2">
                  <table id="lista-carrito" className="table">
                    <thead>
                      <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        carrito && carrito.map(item => (
                          <ItemCarritoInicio key={item.id} item={item}></ItemCarritoInicio>
                        ))
                      }
                    </tbody>
                  </table>

                  <div className="d-flex gap-2 justify-content-md-evenly ms-1">
                    <button id="vaciar-carrito" className="btn btn-primary" onClick={handleVaciarCarrito}>
                      Vaciar carrito
                    </button>
                    <button id="procesar-pedido" className="btn btn-success" to='/carrito' onClick={handleComprar} disabled={carrito.length === 0} >
                      Procesar compra
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar secundario */}

      <div className="container-fluid p-3 colorSecundario">
        <ul className="d-flex justify-content-evenly align-items-center w-50 list-unstyled m-0">
          <li
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop">
            <Link className="hvr-underline-from-left p-2">Categorías</Link>
          </li>

          {/* Menú lateral desplegable */}

          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel">
            <div className="offcanvas-header">
              <h3 className="offcanvas-title text-uppercase" id="offcanvasTopLabel">
                Todas las categorías
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close">
              </button>
            </div>

            <div className="offcanvas-body">
              <ul className="categorias fs-4 p-0">
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Blues</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Clásico</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Electrónica</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Folclore</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Heavy</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Hip Hop</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Infantiles</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Jazz</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">K Pop</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Latinos</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Reggae</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Rock & Pop Internacional</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Rock Nacional</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Tango</Link>
                </li>
                <li className="p-2 rounded-2 hvr-sweep-to-right">
                  <Link to="/NoEncontrada">Varios</Link>
                </li>
              </ul>
            </div>
          </div>

          <li><Link className="hvr-underline-from-left p-2" to="/NoEncontrada">Historial</Link></li>
          <li>
            <Link className="hvr-underline-from-left p-2" to="/NoEncontrada">
              Vistos recientemente
            </Link>
          </li>
          <li><Link className="hvr-underline-from-left p-2" to="/NoEncontrada">Mensajes</Link></li>
          <li><Link className="hvr-underline-from-left p-2" to="/alta">Alta de Productos</Link></li>
          <li><Link className="hvr-underline-from-left p-2" to="/NoEncontrada">Ayuda</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar