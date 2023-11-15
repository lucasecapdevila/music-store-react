import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg colorSecundario">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div
              className="d-flex justify-content-between align-items-center gap-5"
            >
              <NavLink className="inicio" to="/">
                <img className="logo" src="img/logo-oscuro.png" alt="Logo" />
              </NavLink>

              <p className="m-0">Buscanos en nuestras redes:</p>
              <ul className="d-flex m-0 p-0 redes">
                <li className="me-4">
                  <NavLink to="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook fs-5"></i>
                  </NavLink>
                </li>

                <li className="me-4">
                  <NavLink to="https://www.instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram fs-5"></i>
                  </NavLink>
                </li>

                <li className="me-4">
                  <NavLink to="https://twitter.com/" target="_blank">
                    <i className="fa-brands fa-x-twitter fs-5"></i>
                  </NavLink>
                </li>

                <li className="me-4">
                  <NavLink to="https://linkedin.com/" target="_blank">
                    <i className="fa-brands fa-linkedin fs-5"></i>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div
              className="d-flex flex-column justify-content-center contactoIndex"
            >
              <h5 className="mb-3">Contacto</h5>
              <p className="m-0">9 de Julio 112</p>
              <p className="m-0">Concepción, Tucumán (C.P. 4146)</p>
              <NavLink to="/contacto">
                <i className="fa-regular fa-comments me-2"></i>
                Contacto
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid p-4">
        <div className="d-flex align-items-center justify-content-between">
          <ul
            className="d-flex justify-content-evenly align-items-center w-50 list-unstyled m-0"
          >
            <li>
              <Link className="hvr-underline-from-left p-2" to="/NoEncontrada">Servicios</Link>
            </li>
            <li>
              <Link className="hvr-underline-from-left p-2" to="/NoEncontrada">Seguridad</Link>
            </li>
            <li className="text-center">
              <Link className="hvr-underline-from-left p-2" to="/NoEncontrada"
                >Defensa del<br />Consumidor
              </Link>
            </li>
            <li className="text-center">
              <Link className="hvr-underline-from-left p-2" to="/NoEncontrada"
                >Terminos y<br />Condiciones
              </Link>
            </li>
            <li>
              <Link className="hvr-underline-from-left p-2" to="/NoEncontrada">Privacidad</Link>
            </li>
            <li>
              <NavLink className="hvr-underline-from-left p-2" to="/nosotros"
                >¿Quiénes somos?
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center justify-content-evenly qr">
            <p className="m-0">&copy; CopyRight - Music Store S.A. 2023</p>
            <img src="img/data-fiscal.jpeg" alt="QR Data Fiscal" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer