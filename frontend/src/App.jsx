import { Routes, Route } from "react-router-dom"
import UserSignUp from "./pages/UserSignUp"
import UserLogin from "./pages/UserLogin"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignUp from "./pages/CaptainSignUp"
import Start from "./pages/Start"
import Home from "./pages/Home"
import UserProtectWrapper from "./pages/UserProtectWrapper"
import UserLogout from "./pages/UserLogout"
import CaptainHome from "./pages/CaptainHome"
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper"
import CaptainLogout from "./pages/CaptainLogout"
import Riding from "./pages/Riding"
import CaptainRide from "./pages/CaptainRide"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/home" element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>}/>
        <Route path="/user/logout" element={
          <UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>}/>
        <Route path="/captain-home" element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        }/>
        <Route path="/captain/logout" element={
          <CaptainProtectWrapper>
            <CaptainLogout/>
          </CaptainProtectWrapper>
        }/>
        <Route path="/riding" element={<Riding/>}/>
        <Route path="/captain-riding" element={<CaptainRide/>}/>
      </Routes>
    </div>
  )
}

export default App