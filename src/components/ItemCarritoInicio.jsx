import CarritoContext from '../contexts/CarritoContext'
import './ItemCarritoInicio.css'
import React, { useContext } from 'react'

const ItemCarritoInicio = ({item}) => {
  const {eliminarProductoCarritoContext} = useContext(CarritoContext)

  const handleEliminar = (id) => {
    console.log(`Estoy eliminando -> ${id}`);
    eliminarProductoCarritoContext(id)
  }

  return (
    <tr>
      <td>
        <img src={`/img/products/${item.foto}`} alt={item.titulo} width="100" />
      </td>
      <td>{item.titulo}</td>
      <td>${item.precio}</td>
      <td>
        <button className="fas fa-times-circle text-danger btn-borrar" onClick={() => handleEliminar(item.id)}></button>
      </td>
    </tr>
  )
}

export default ItemCarritoInicio