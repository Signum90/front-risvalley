import { useEffect, useState } from 'react'

const Request = (method, body, url, config, auth ) => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // Parametros
  const req_param = {
    method,
    body,
    headers:{
      "Content-Type": config,
      "Authorization": `Basic ${auth}`
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`http://${url}`, req_param)
        // Manejo de la respuesta según el tipo de contenido esperado
        if (response.ok) {
          const responseData = await response.json() // O response.text(), dependiendo del tipo de respuesta
          setData(responseData)
        } else {
          throw new Error(`Error en la solicitud: ${response.status}`)
        }
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [method, body, url, config, auth])

  return { data, error, loading}
}

export default Request
