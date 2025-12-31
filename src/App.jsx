import { Route, Routes } from "react-router-dom"
import AdminPage from "./Pages/Admin"
import HomePage from "./Pages/Home"
import LoginPage from "./Pages/Login"



function App() {
  

  return (
    <div className="w-full h-screen bg-red-500">
      <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </div>
  )
}

export default App
