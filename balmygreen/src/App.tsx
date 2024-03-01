import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './admin_pages/Login.tsx';
import AdminHome from './admin_pages/Home.tsx';
import { useState } from "react";
import Home from "./pages/Home.tsx";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/admin/*"element={isLoggedIn ? <AdminHome /> : <Navigate to="/admin/login" />}  /> 
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
