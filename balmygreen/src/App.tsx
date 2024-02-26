import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login.tsx';
//import SignUp from './pages/signup.tsx';
//import Lobby from './pages/lobby.tsx';

function App() {
  const isLoggedIn = false;

  return (
    <BrowserRouter>
      {!isLoggedIn && <Navigate to="/login" />}
      <Routes>
        <Route path="/login" element={<Login />}/>
        {/* <Route path="/" element={<Home />}/>  */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
