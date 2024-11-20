import React from 'react'
import { NavLink } from 'react-router-dom'

const AdditionalDetails = () => {
    return (
        <div className="bg-gray-800 w-full py-4 px-8 mt-8">
            <div className="w-full flex flex-col gap-3">
                <div className="w-full flex justify-between">
                    <h1 className="text-lg text-gray-300">Additional Details</h1>
                    <div>
                        <NavLink to="/dashboard/setting" className="bg-yellow-500 px-5 py-2 rounded-md hover:bg-yellow-600 duration-300 text-gray-900 text-base font-semibold" >Edit</NavLink>
                    </div>
                </div>
                <div className="w-[500px] flex">
                    <div className="w-[50%] flex flex-col gap-2">
                        <div>
                            <h3 className="text-gray-300">First Name</h3>
                            <p className="text-sm text-gray-400">Shubham</p>
                        </div>
                        <div>
                            <h3 className="text-gray-300">Date of Birth</h3>
                            <p className="text-sm text-gray-400">12/01/2000</p>
                        </div>
                        <div>
                            <h3 className="text-gray-300">Gender</h3>
                            <p className="text-sm text-gray-400">Male</p>
                        </div>
                    </div>
                    <div className="w-[50%] flex flex-col gap-2">
                        <div>
                            <h3 className="text-gray-300">Last Name</h3>
                            <p className="text-sm text-gray-400">Aswal</p>
                        </div>
                        <div>
                            <h3 className="text-gray-300">Email</h3>
                            <p className="text-sm text-gray-400">shubhamaswal7678</p>
                        </div>
                        <div>
                            <h3 className="text-gray-300">Contact</h3>
                            <p className="text-sm text-gray-400">7678162102</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AdditionalDetails