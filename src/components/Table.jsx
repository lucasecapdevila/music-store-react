import React from 'react'
import TableRow from './TableRow'

const Table = ({productos, eliminarProductos, setProductoEditar}) => {
  
  return (
    <>
      <h2>Tabla de Productos</h2>
      <table className="table table-striped m-0">
        <thead>
          <tr>
            <th className='text-center'>Título</th>
            <th className='text-center'>Año</th>
            <th className='text-center'>Formato</th>
            <th className='text-center'>Precio</th>
            <th className='text-center'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          
          {
            productos && productos.map((producto) => (
              <TableRow 
              producto={producto} 
              eliminarProductos={eliminarProductos}
              setProductoEditar={setProductoEditar}
              key={producto.id} />
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Table