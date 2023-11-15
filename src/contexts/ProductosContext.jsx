import { useState, useEffect, createContext } from "react"
import { eliminar, get, post, put } from "../utils/http"

const ProductosContext = createContext()
const url = import.meta.env.VITE_ENDPOINT_PRODUCTOS
const urlId = import.meta.env.VITE_ENDPOINT_PRODUCTOS_ID

const ProductosProvider = ({ children }) => {

  const [productos, setProductos] = useState(null)
  const [productoEditar, setProductoEditar] = useState(null)
  

  useEffect(() => {
    obtenerProductos()
  }, [])


  //! GET ALL => OBTENER TODOS LOS PRODUCTOS

  const obtenerProductos = async () => {
    try {
      const productosBack = await get(url)
      setProductos(productosBack)
      
    } catch (error) {
      console.error((`[obtenerProductos] -> Algo no funcionó, ${error}`));
    }
  }


  //! POST => CREACIÓN DE PRODUCTOS
  
  const crearProductos = async (productoNuevo) => {
    try {
      productoNuevo.id = Date.now()
      const productoCreado = await post(url, productoNuevo)
      const nuevaDB = [...productos, productoCreado]
      setProductos(nuevaDB)

    } catch (error) {
      console.error((`[crearProductos] -> Algo no funcionó, ${error}`));
    }
  }
  
  
  //! PUT => EDICIÓN DE PRODUCTOS
  
  const actualizarProductos = async (productoEditar) => {
    const urlCompleta = urlId + productoEditar.id

    try {
      const productoEditado = await put(urlCompleta, productoEditar)
    } catch (error) {
      console.error((`[actualizarProductos] -> Algo no funcionó, ${error}`));
    }
    
    const nuevaDB = productos.map( producto => (producto.id === productoEditar.id) ? productoEditar : producto)
    setProductos(nuevaDB)
  }
  
  
  //! DELETE => ELIMINACIÓN DE PRODUCTOS
  
  const eliminarProductos = async (productoEliminar) => {
    const urlCompleta = urlId + productoEliminar
    let isDelete = window.confirm(
      `¿ Estás seguro que deseas eliminar el producto ?`
    )
    if(isDelete) {
      const productosActualizados = await eliminar(urlCompleta)
      let nuevaDB = productos.filter((producto) => producto.id !== productoEliminar)
      setProductos(nuevaDB)
    } else{
      return
    }
  }


  const data = {
    productos,
    crearProductos,
    eliminarProductos,
    setProductoEditar,
    productoEditar,
    actualizarProductos
  }

  return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}

export { ProductosProvider }
export default ProductosContext