import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Login from './components/Login';


function App() {

  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin}/>}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}


      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
