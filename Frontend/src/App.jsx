import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        
        </Routes>
        </div>
    </>
  )
}

export default App
