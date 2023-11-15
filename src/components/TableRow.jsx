import React from 'react'

const TableRow = ({producto, eliminarProductos, setProductoEditar}) => {
  return (
    <tr>
      <td className='align-middle'>{producto.titulo}</td>
      <td className='text-center align-middle'>{producto.anio}</td>
      <td className='text-center align-middle'>{producto.formato}</td>
      <td className='text-center align-middle'>${producto.precio}</td>
      <td className='d-flex justify-content-center'>
        <button
          className='btn btn-primary me-2'
          onClick={() => setProductoEditar(producto)}>
          Editar
        </button>
        <button 
          className='btn btn-danger me-2' 
          onClick={() => eliminarProductos(producto.id)}>
            Eliminar
          </button>
      </td>
    </tr>
  )
}

export default TableRow