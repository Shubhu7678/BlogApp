import React from 'react'
import mainBlogImage from '../../../assets/mainBlog.webp';
import { NavLink } from 'react-router-dom';

const MainBlog = () => {
  return (
      <div className="px-8 w-full rounded-sm h-[230px] pt-2">
          <div className="bg-red-100 rounded-md w-full h-full relative overflow-hidden">
              <img className="w-full h-full object-cover" src={mainBlogImage} alt="" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-transparent"></div>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                  <div className="flex flex-col items-center">
                  <p className="font-mono text-4xl ">
                   Blog Grid
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                      <NavLink to="/about" className="px-4 py-2 bg-transparent border-b-2 border-zinc-600 rounded-md ">
                          Home
                      </NavLink>
                      <NavLink className="px-4 py-2 bg-transparent border-b-2 border-zinc-600 rounded-md">
                          About
                      </NavLink>

                      </div>
                      </div>
              </div>
              
          </div>
    </div>
  )
}

export default MainBlog