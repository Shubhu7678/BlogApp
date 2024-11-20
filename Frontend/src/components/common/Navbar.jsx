import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../services/operations/authApis'

const Navbar = () => {

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {

        document.getElementById('my_modal_3').close();
        logout(navigate, dispatch);
    }
    return (
        <>
            <div className="navbar w-full h-[64px] bg-gray-800 text-gray-50">
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
                                                <li>
                                                    <button className=" hover:bg-gray-100 p-2 rounded-md" onClick={() => document.getElementById('my_modal_3').showModal()}>Logout</button>
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
            </div>
            {/* Modal for logout by daisyUI */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box text-center bg-gray-900">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm text-gray-400 btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-semibold mt-2 text-lg text-gray-400 text-center">Are you sure you want to logout ?</h3>
                    <div className="mt-4 flex gap-4 items-center justify-center">

                        <button onClick={() => handleLogout()} className="px-4 py-3  bg-gray-800 text-yellow-400 text-md rounded-md hover:text-yellow-200 duration-300">Logout</button>
                        <button onClick={() => document.getElementById('my_modal_3').close()} className="px-4 py-3  bg-gray-800 text-yellow-400 text-md rounded-md hover:text-yellow-200 duration-300">Cancel</button>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Navbar