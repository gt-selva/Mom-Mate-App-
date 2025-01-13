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
import Home from './Components/Home'
import Vaccination from './Components/Vaccination'
import Breastfeeding from './Components/Breastfeeding'
import Articles from './Components/Articles'
import ExcerciseWellness from './Components/ExcerciseWellness'
import CommunitySupport from './Components/CommunitySupport'
import NutritionGuide from './Components/NUtritionGuide'

function App() {

  return (
    <>
      {/* <BrowserRouter>
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
          <Route path='/home' element={<Home />} />
          <Route path='/vaccination' element={<Vaccination />} />
          <Route path='/breastfeeding' element={<Breastfeeding />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/excersicewellness' element={<ExcerciseWellness />} />
          <Route path='/communitysupport' element={<CommunitySupport />} />
        </Routes>
      </BrowserRouter> */}
      <NutritionGuide />










    </>
  )
}

export default App
