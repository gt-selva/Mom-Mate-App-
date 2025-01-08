import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Welcome from './Components/Welcome'
import UrlError from '../src/Components/UrlError'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<UrlError />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
