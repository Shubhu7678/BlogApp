import React from 'react'
import { NavLink } from 'react-router-dom'
const ProfileAbout = () => {
    return (
        <div className="bg-gray-800 w-full py-4 px-8 mt-8">
            <div className="w-full flex justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-lg text-gray-300">About</h1>
                    <p className="text-sm text-gray-400">Write Something About Yourself</p>
                </div>
                <div>
                    <NavLink to="/dashboard/setting" className="bg-yellow-500 px-5 py-2 rounded-md hover:bg-yellow-600 duration-300 text-gray-900 text-base font-semibold" >Edit</NavLink>
                </div>
             </div>

        </div>
    )
}

export default ProfileAbout