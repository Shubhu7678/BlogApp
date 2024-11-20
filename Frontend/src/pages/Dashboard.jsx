import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/core/Dashboard/Sidebar'

const Dashboard = () => {
  return (
      <div className="w-full flex h-[calc(100vh-64px)] ">
          <Sidebar />
          <div className="w-full h-[calc(100vh-64px)] overflow-y-auto">
              <Outlet/>
          </div>
          
    </div>
  )
}

export default Dashboard