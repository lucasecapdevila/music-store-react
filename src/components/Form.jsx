import React, { useEffect, useState } from 'react'

const formInicial = {
  id: null,
  titulo: '',
  anio: '',
  formato: '',
  precio: '',
  foto: '',
}

const Form = ({crearProductos, actualizarProductos, productoEditar, setProductoEditar}) => {

  const [form, setForm] = useState(formInicial)

  useEffect(() => {
    productoEditar ? setForm(productoEditar) : setForm(formInicial)
  },[productoEditar])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.anio]: e.target.value,
      [e.target.formato]: e.target.value,
      [e.target.precio]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(form.id === null){
      crearProductos(form)
    } else{
      actualizarProductos(form)
    }
    
    handleReset()
  }


  const handleReset = (e) => {
    setForm(formInicial)
    setProductoEditar(null)
  }

  return (
    <>
      <h3>{form.id ? 'Editar' : 'Agregar'}</h3>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="titulo-producto" className="form-label">
            Título del producto
          </label>
          <input 
            type="text" 
            name='titulo'
            className="form-control"
            id='titulo-producto'
            placeholder='Título' 
            onChange={handleChange} 
            value={form.titulo} 
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="anio-producto" className="form-label">
            Año del producto
          </label>
          <input 
            type="text"
            name='anio'
            className="form-control"
            id='anio-producto'
            placeholder='Año'
            onChange={handleChange}
            value={form.anio} 
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="formato-producto" className="form-label">
            Formato del producto
          </label>
          <input 
            type="text"
            name='formato'
            className="form-control"
            id='formato-producto'
            placeholder='Formato'
            onChange={handleChange}
            value={form.formato} 
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="precio-producto" className="form-label">
            Precio del producto
          </label>
          <input 
            type="text"
            name='precio'
            className="form-control"
            id='precio-producto'
            placeholder='Precio'
            onChange={handleChange}
            value={form.precio} 
          />
        </div>

        <button 
          type='submit'
          className='btn btn-success me-2 px-5'>
          Enviar
        </button>
        <button 
          type='reset'
          className='btn btn-secondary px-5'
          onClick={handleReset}>
          Limpiar
        </button>
      </form>
    </>
  )
}

export default Form