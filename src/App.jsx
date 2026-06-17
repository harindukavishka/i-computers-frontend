import { Route, Routes } from "react-router-dom"
import AdminPage from "./Pages/Admin"
import HomePage from "./Pages/Home"
import LoginPage from "./Pages/Login"
import Test from "./components/Test"
import { Toaster } from "react-hot-toast"
import RegisterPage from "./Pages/registerPage"
import ForgotPassword from "./Pages/ForgotPassword"
import { GoogleOAuthProvider } from "@react-oauth/google"



function App() {
  

  return (
    <GoogleOAuthProvider clientId="202581614140-470mbas05f146dog7h4voeva0k7lpkf8.apps.googleusercontent.com">
    <div className="w-full h-screen bg-linear-to-b from-bgLight to-bg  overflow-hidden  text-text">
      <Toaster position="top-right"/>
      <Routes>
       <Route path="/*" element={<HomePage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/register" element={<RegisterPage />} />
       <Route path="/admin/*" element={<AdminPage />} />
       <Route path="/forgot-password" element={<ForgotPassword />} />
       <Route path="/test" element={<Test />} />
      </Routes>
    </div>
    </GoogleOAuthProvider>
  )
}

export default App
