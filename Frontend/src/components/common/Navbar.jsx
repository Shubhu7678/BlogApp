import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile); 
    // console.log(user);
    // console.log("Token : ", token);
    return (
        <>
            <div className="navbar w-full bg-gray-800 text-gray-50">
                {/* <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div> */}
                <div className="w-full px-8 py-1">
                    <div className="flex w-full items-center justify-between">
                        <NavLink className="text-3xl font-extralight">
                            ShubhBlogs
                        </NavLink>
                        <nav className="flex items-center gap-8">
                            <NavLink to="/" className="text-lg font-sans text-gray-400 hover:text-yellow-400 duration-300">Home</NavLink>
                            <NavLink to='/blogs' className="text-lg font-sans text-gray-400 hover:text-yellow-400 duration-300">Articles</NavLink>
                            <NavLink to='/about' className="text-lg font-sans text-gray-400 hover:text-yellow-400 duration-300">About</NavLink>
                            <NavLink to='/contact' className="text-lg font-sans text-gray-400 hover:text-yellow-400 duration-300">Contact Us</NavLink>
                        </nav>
                        <div className="flex items-center gap-4">
                            {
                                token ? (
                                    <>
                                        <div className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                <div className="w-9 rounded-full">
                                                    <img
                                                        alt="Tailwind CSS Navbar component"
                                                        src={user.userImage} />
                                                </div>
                                            </div>
                                            <ul
                                                tabIndex={0}
                                                className="menu menu-sm dropdown-content bg-base-100 text-gray-800 rounded-box z-[4] mt-3 w-52 p-2 shadow">
                                                <li>
                                                    <NavLink to="/dashboard/my-profile" className="hover:bg-gray-100 p-2 rounded-md">
                                                        Profile
                                                        <span className="badge">new</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/dashboard/setting" className="hover:bg-gray-100 p-2 rounded-md">
                                                        Settings
                                                    </NavLink>
                                                </li>
                                                <li>
                                                   <NavLink to="/dashboard/my-blogs" className="hover:bg-gray-100 p-2 rounded-md">
                                                        Blogs
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>

                                    </>
                                ) :
                                    (
                                        <>
                                            <NavLink to="/login" className="px-3 py-2 bg-gray-600 text-md rounded-md hover:text-yellow-400 duration-300">Login</NavLink>
                                            <NavLink to="/signup" className="px-3 py-2 bg-gray-600 text-md rounded-md hover:text-yellow-400 duration-300">SignIn</NavLink>
                                        </>
                                    )
                            }

                        </div>
                    </div>
                </div>
                {/* <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Navbar