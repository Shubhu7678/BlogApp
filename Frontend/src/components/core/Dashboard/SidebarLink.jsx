import React from 'react'
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbBrandBlogger } from "react-icons/tb";
import { matchPath, NavLink, useLocation } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";

const SidebarLink = ({ link }) => {
    
    const location = useLocation();

    const pathMatch = (path) => {
        
         return matchPath({ path: path }, location.pathname);
    } 

    pathMatch(link.path);

  return (
    <NavLink to={link.path} className={`relative px-8 py-2 hover:bg-gray-600 duration-300 text-lg font-mono ${pathMatch(link.path) ? 'bg-yellow-950 text-yellow-400': ''} text-white`}>
          <span className={`absolute top-0 left-0 h-full w-[0.2rem] bg-yellow-400 ${pathMatch(link.path) ? 'opacity-100' : 'opacity-0'}  `}></span>
          <div className="flex gap-2 items-center">
              {link.icon}
              <span>{link.title}</span>
          </div>
    </NavLink>
  )
}

export default SidebarLink