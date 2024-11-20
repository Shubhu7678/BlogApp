import React from 'react'
import { dashboardLinks } from '../../../data/dashboard-links'
import SidebarLink from './SidebarLink'


const Sidebar = () => {

    
  return (
      <div className="min-w-[260px] bg-gray-950 border-r-[1px] border-gray-700 h-[calc(100vh-64px)] overflow-y-auto ">
          <div className="flex flex-col gap-3 pt-8">
              { 
                  dashboardLinks.map((link, index) => (
                      <SidebarLink key={index} link={link} />
                  ))
              }
          </div>
    </div>
  )
}

export default Sidebar