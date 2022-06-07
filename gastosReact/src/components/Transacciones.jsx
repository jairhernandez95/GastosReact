import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Transaccion from './Transaccion'

const Transacciones = () => {
  
  const {transacciones} = useContext(GlobalContext)
  console.log(transacciones)

  return (
      <>
        <h3>Transacciones</h3>
        <ul className='list'>
            {transacciones.map(transaccion => (<Transaccion key={transaccion.id} transaccion = { transaccion } />))}
        </ul>
      </>
  )
}

export default Transacciones