import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const NuevaTransaccion = () => {
  const [texto, setTexto] = useState('')
  const [importe, setImporte] = useState('')

  const { addTransaccion } = useContext(GlobalContext)

  const onSubmit = event => {
    event.preventDefault()

    const newTransaccion = {
      id: Math.floor(Math.random()*100000000),
      texto,
      importe: +importe
    }

    addTransaccion(newTransaccion)

    setTexto('')
    setImporte('')

  }

  return (
    <>
      <h3>Agregar Nueva Transacción</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="texto">Descripción:</label>
          <input type="text" value={texto} onChange={(event) => setTexto(event.target.value)} placeholder='Teclea una descripción' />
        </div>
        <div className="form-control">
          <label htmlFor="importe">Importe <br/> (Negativo - Egreso, Positivo - Ingreso)</label>
          <input type="number" value={importe} onChange={(event) => setImporte(event.target.value)} placeholder='Teclea un importe' />
        </div>
        <button className='btn'>Agregar</button>
      </form>
    </>
  )
}

export default NuevaTransaccion