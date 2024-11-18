import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full">
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
        </div>
    </>
  )
}

export default App
