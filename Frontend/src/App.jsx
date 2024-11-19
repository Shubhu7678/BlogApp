import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/dashboard'
import Profile from './components/core/Dashboard/Profile/Profile'


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
          <Route element={<Dashboard />}>
             <Route path="/dashboard/my-profile" element={<Profile/>} />
          </Route>
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
        </div>
    </>
  )
}

export default App
