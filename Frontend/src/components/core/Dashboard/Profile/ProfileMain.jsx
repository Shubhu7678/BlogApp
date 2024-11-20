import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileMain = () => {
    return (
        <div className="bg-gray-800 w-full py-4 px-8 mt-8">
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-0">
                        <h1 className="text-gray-300 text-lg ">Shubham Aswal</h1>
                        <p className="text-gray-400 text-sm">shubhamaswal7678@gmail.com</p>
                    </div>
                </div>
                <div>
                    <NavLink to="/dashboard/setting" className="bg-yellow-500 px-5 py-2 rounded-md hover:bg-yellow-600 duration-300 text-gray-900 text-base font-semibold" >Edit</NavLink>
                </div>

            </div>
        </div>
    )
}

export default ProfileMain