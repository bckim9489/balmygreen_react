import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';
import { useState } from "react";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*"element={isLoggedIn ? <Home /> : <Navigate to="/login" />}  /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
