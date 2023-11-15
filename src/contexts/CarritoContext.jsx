import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { post } from "../utils/http"

const CarritoContext = createContext()

const url = import.meta.env.VITE_ENDPOINT_CARRITO

const CarritoProvider = ({ children }) => {
  const [agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, guardarCarrito, carrito] = useLocalStorage('carrito', [])
  const [totalProducto, setTotal] = useState(0)


  //  Indica cuántas veces quisieron comprar el producto
  const elProductoEstaEnElCarrito = (producto) => {
    return carrito.filter(prod => prod.id === producto.id).length
  }

  //  Indica si hay un producto en el carrito
  const obtenerProductoDeCarrito = (producto) => {
    return carrito.find(prod => prod.id === producto.id)
  }

  useEffect(() => {
    setTotal(precioArticulosCarritoContext())
  }, [carrito])
  
  const agregarCarritoContext = (producto) => {
    if(!elProductoEstaEnElCarrito(producto)){
      producto.cantidad = 1
      agregarAlCarrito(producto)
    } else{
      const productoDeCarrito = obtenerProductoDeCarrito(producto)
      console.log(productoDeCarrito);
      productoDeCarrito.cantidad++
      guardarCarrito(carrito)
    }
  } 

  const cambiarCantidadCarritoContext = (productoNuevaCantidad) => {
    try {
      const nuevoCarrito = carrito.map(producto => producto.id === productoNuevaCantidad.id ? productoNuevaCantidad : producto)
      guardarCarrito(nuevoCarrito)
    } catch (error) {
      console.error(`[cambiarCantidadCarritoContext]: No se pudo guardar el producto con la nueva cantidad`);
    }
  }
  
  const eliminarProductoCarritoContext = (id) => {
    eliminarDelCarrito(id)
  }

  const guardarCarritoContext = async () => {
    try {
      const carritoGuardado = await post(url, carrito)
      console.log(url);
      console.log(carrito);
      console.log(carritoGuardado);
      
    } catch (error) {
      console.error('[guardarCarritoContext]: No se pudo guardar el carrito', error);
    }

  }

  const vaciarCarritoContext = () => {
    vaciarCarrito()
  }

  const cantidadArticulosCarritoContext = () => {
    let sumaTotalArticulos = carrito.reduce((total, producto) => {
    return total + producto.cantidad
    }, 0)
    return sumaTotalArticulos
  }

  const precioArticulosCarritoContext = () => {
    let sumaTotalPrecio = carrito.reduce((total, producto) => {
      return total + (producto.precio * producto.cantidad)
      }, 0)
    return sumaTotalPrecio
  }

  const precioEnvioCarritoContext = (precioProducto) => {
    let sumaTotalPrecioYEnvio = precioProducto * 0.1
    return sumaTotalPrecioYEnvio
  }

  const precioFinal = (precioProducto, precioEnvio) => {
    let sumaFinal = precioProducto + precioEnvio
    return sumaFinal
  }

  const data = {
    carrito,
    totalProducto,
    agregarCarritoContext,
    eliminarProductoCarritoContext,
    guardarCarritoContext,
    vaciarCarritoContext,
    cantidadArticulosCarritoContext,
    cambiarCantidadCarritoContext,
    precioArticulosCarritoContext,
    precioEnvioCarritoContext,
    precioFinal}
  return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoProvider}
export default CarritoContext