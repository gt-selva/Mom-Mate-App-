import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Welcome from './Components/Welcome'
import UrlError from '../src/Components/UrlError'
import Details from '../src/Components/Details'
import CurrentStage from './Components/CurrentStage'
import DueDate from './Components/DueDate'
import OtpPage from './Components/OtpPage'
import VerificationSuccess from './Components/VerificationSuccess'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<UrlError />} />
          <Route path='/details' element={<Details />} />
          <Route path='/currentstage' element={<CurrentStage />} />
          <Route path='/duedate' element={<DueDate />} />
          <Route path='/otpVerification' element={<OtpPage />} />
          <Route path='/verificationSuccessful' element={<VerificationSuccess />} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
