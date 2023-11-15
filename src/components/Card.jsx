import { useContext } from "react";
import CarritoContext from "../contexts/CarritoContext";
import ThemeContext from "../contexts/ThemeContext";

const Card = ({producto}) => {
  const {agregarCarritoContext} = useContext(CarritoContext)

  const {theme} = useContext(ThemeContext)

  const handleComprar = (producto) => {
    console.log('Compraste ->', producto)
    agregarCarritoContext(producto)
  }

  return (
    <div className={`card col-2 mx-1 mt-3 bg-${theme}`}>
      <img src={`/img/products/${producto.foto}`} className="imagenCard" alt={producto.titulo}/>
      <div className={`card-body`}>
        <h5 className="card-title">
          <span className="precio-producto">${producto.precio}</span>
        </h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          6 cuotas de $2064
        </h6>
        <p className="card-text">
          <span className="titulo-producto">
            {producto.titulo}
          </span>
          (<span className="anio-producto">{producto.anio}</span>)
          <span className="formato-producto">{producto.formato}</span>
        </p>
        <button to="/" className="btn btn-primary agregar-carrito" onClick={() => handleComprar(producto)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
}

export default Card