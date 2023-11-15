import './ItemCarritoInicio.css'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import CarritoContext from '../contexts/CarritoContext'

const ItemCarrito = ({itemProducto}) => {
  const {cambiarCantidadCarritoContext, eliminarProductoCarritoContext} = useContext(CarritoContext)

  let precioCantidadInicial = itemProducto.precio * itemProducto.cantidad

  const [total, setTotal] = useState(precioCantidadInicial)

  const [cantidadInput, handleChange] = useForm({
    cantidad: itemProducto.cantidad
  })

  useEffect(() => {
    let totalRecalculado = Number(itemProducto.precio * cantidadInput.cantidad).toFixed(2)
    setTotal(totalRecalculado)
    itemProducto.cantidad = cantidadInput.cantidad
    cambiarCantidadCarritoContext(itemProducto)


  }, [cantidadInput.cantidad])

  return (
    <div className='row p-3 mb-3'>
      <div className="col-3 mb-1">
          <div className="bg-image rounded">
            <img className="w-100" src={`/img/products/${itemProducto.foto}`} alt={itemProducto.titulo} />
          </div>
        </div>
        <div className="col-6 pt-1">
          <p className="mb-4"><strong>{itemProducto.titulo}</strong></p>
          <p className="mt-4">Año</p>
          <p className="mt-4">Formato</p>
          <p className="mt-4">Precio</p>

          <button 
            className="btn-sm me-1 mb-2 fs-4 fa-solid fa-trash-can text-danger btn-borrar"
            onClick={() => {eliminarProductoCarritoContext(itemProducto.id)}}>
          </button>
        </div>

        <div className="col-3">
          <input 
            min="1"
            type="number"
            className="form-control p-1 text-center" 
            placeholder="Cantidad"
            name="cantidad"
            value={cantidadInput.cantidad}
            onChange={handleChange}
            />
          <p className="text-center mt-4">
            <strong>{itemProducto.anio}</strong>
          </p>
          <p className="text-center mt-4">
            <strong>{itemProducto.formato}</strong>
          </p>
          <p className="text-center mt-4 precio">
            <span>${total}</span>
          </p>
        </div>
    </div>
  )
}

export default ItemCarrito