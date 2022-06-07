import Balance from '../components/Balance'
import Header from '../components/Header'
import IngresosEgresos from '../components/IngresosEgresos'
import NuevaTransaccion from '../components/NuevaTransaccion'
import Transacciones from '../components/Transacciones'

import { GlobalProvider } from '../context/GlobalContext'

import '../styles/App.css'

function App() {

  return (
    <GlobalProvider className="App">
      <Header />
      <div className='container'>
        <Balance />
        <IngresosEgresos />
        <Transacciones />
        <NuevaTransaccion/>
      </div>
    </GlobalProvider>
  )
}

export default App
