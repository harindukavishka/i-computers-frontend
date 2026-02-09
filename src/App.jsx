import { Route, Routes } from "react-router-dom"
import AdminPage from "./Pages/Admin"
import HomePage from "./Pages/Home"
import LoginPage from "./Pages/Login"
import Test from "./components/Test"
import { Toaster } from "react-hot-toast"



function App() {
  

  return (
    <div className="w-full h-screen bg-secondary text-secondary">
      <Toaster position="top-right"/>
      <Routes>
       <Route path="/*" element={<HomePage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/admin/*" element={<AdminPage />} />
       <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  )
}

export default App
