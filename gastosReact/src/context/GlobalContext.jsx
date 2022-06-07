import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// Estado Inicial
const initialState = {
  transacciones: [
    {id:1, texto: 'Compré pizza', importe: -350},
    {id:2, texto: 'Vendí PC', importe: 4000},
    {id:3, texto: 'Compré un libro', importe: -200},
    {id:4, texto: 'Me pagaron mi salario', importe: 5000},
  ]
}

// Creamos el contexto
export const GlobalContext = createContext(initialState)

// Componente Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (<GlobalContext.Provider value={{
    transacciones: state.transacciones
  }}>
    { children }
  </GlobalContext.Provider>)
}