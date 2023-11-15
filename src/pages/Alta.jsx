import React, { useContext, useEffect, } from 'react'
import ProductosContext from '../contexts/ProductosContext';
import Table from '../components/Table';
import Form from '../components/Form';
import ThemeContext from '../contexts/ThemeContext';

const Alta = () => {
  const {theme} = useContext(ThemeContext)

  useEffect(() => {
    document.title = "MusicStore | Alta (Carga de Productos)";
  }, [])
  
  const {productos, crearProductos, eliminarProductos, setProductoEditar, productoEditar, actualizarProductos} = useContext(ProductosContext)

  return (
    <>
      <main className={`bg-${theme}`}>
        <section className='container py-3'>
          <h1 className="display-1">Alta de productos</h1>
          <hr />

          <Form 
            crearProductos={crearProductos}
            actualizarProductos={actualizarProductos}
            productoEditar={productoEditar}
            setProductoEditar={setProductoEditar}
            />
          <hr />
          <Table
            theme={theme}
            productos={productos} 
            eliminarProductos={eliminarProductos} 
            setProductoEditar={setProductoEditar}
          />
        </section>
      </main>
    </>
  )
}

export default Alta