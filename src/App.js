import './App.css'
import logo from './images/logo.svg'
import Form from './components/Form'
import { CalcProvider } from './context/CalcContext'

function App() {
  return (
    <CalcProvider>
      <main className='app-container'>
        <div className='heading'>
          <img src={logo} alt='Splitter' />
        </div>
        <Form />
      </main>
    </CalcProvider>
  )
}

export default App
