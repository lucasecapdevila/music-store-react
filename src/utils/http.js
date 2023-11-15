//!   CRUD -> C: CREATE -> POST
//!   CRUD -> R: READ -> GET
//!   CRUD -> U: UPDATE -> PUT
//!   CRUD -> D: DELETE -> DELETE

//*   CRUD -> C: CREATE -> POST
export const post = async (url, data) => {
  const fetchConfig = {
    method: 'POST',
    header: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }
  
  try {
    const respuesta = await fetch(url, fetchConfig)
    if(!respuesta.ok){
      throw new Error(`Algo pasó en fetch: ${respuesta.status} ${respuesta.statusText}`)
    }
    // const data = await respuesta.json()
    console.log(data);
    return data
  } catch (error) {
    console.error(`ERROR POST -> `, error);
  }
}



//*   CRUD -> R: READ -> GET
export const get = async (url) => {
  try {
    const respuesta = await fetch(url)
    if(!respuesta.ok){
      throw new Error(`Algo pasó en fetch: ${respuesta.status} ${respuesta.statusText}`)
    }
    const data = await respuesta.json()
    return data
  } catch (error) {
    console.error(`ERROR GET -> `, error);
  }
}



//*   CRUD -> U: UPDATE -> PUT
export const put = async (url, data) => {
  const fetchConfig = {
    method: 'PUT',
    header: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }

  try {
    const respuesta = await fetch(url, fetchConfig)
    if(!respuesta.ok){
      throw new Error(`Algo pasó en fetch: ${respuesta.status} ${respuesta.statusText}`)
    }
    const datos = await respuesta.json()
    return datos
  } catch (error) {
    console.error(`ERROR PUT -> `, error);
  }
}



//*   CRUD -> D: DELETE -> DELETE
export const eliminar = async(url) => {
  const fetchConfig = {
    method: 'DELETE'
  }

  try {
    const respuesta = await fetch(url, fetchConfig)
    if(!respuesta.ok){
      throw new Error(`Algo pasó en fetch: ${respuesta.status} ${respuesta.statusText}`)
    }
    const datos = await respuesta.json()
    return datos

  } catch (error) {
    console.error(`ERROR DELETE -> `, error);
  }
}