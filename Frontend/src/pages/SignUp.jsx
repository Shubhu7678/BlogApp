import React, { useState } from 'react'
import SignUpImage from '../assets/Signup.jpeg'
import { NavLink } from 'react-router-dom'
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useForm } from 'react-hook-form'

// import { login } from '../services/operations/authApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../services/operations/authApis';

const Login = () => {

    const { register,
        handleSubmit,
        reset,
        setValue,
        getValues,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {

        signup(data,navigate);
        reset();

    }

    const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);

    return (
        <div className="bg-gray-900">
            <div className="w-11/12 mx-auto h-[calc(100vh-64px)] flex items-center justify-center">
                <div className="w-full flex items-center justify-center">
                    <div className="text-white w-full md:w-[50%] lg:w-[45%]">
                        <div className="w-full p-2  md:p-8">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-4xl font-semibold">Create a new account</h1>
                                <p className="text-sm font-normal text-gray-400">Please fill the form to create a new account</p>
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="mb-3 w-full  flex gap-2 justify-center">
                                            <div className="w-[50%]">
                                                <label className="text-sm" htmlFor="firstName">First Name</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    style={{
                                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                                    }}
                                                    className="input input-bordered w-full bg-gray-700"
                                                    {...register('firstName', { required: true })}
                                                />
                                                {errors.firstName && <span className="text-red-500 text-sm pl-2">First Name is required**</span>}
                                            </div>
                                            <div className="w-[50%]">
                                                <label className="text-sm" htmlFor="lastName">Last Name</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    style={{
                                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                                    }}
                                                    className="input input-bordered w-full bg-gray-700"
                                                    {...register('lastName', { required: true })}
                                                />
                                                {errors.lastName && <span className="text-red-500 text-sm pl-2">Last Name is required**</span>}
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="text-sm" htmlFor="email">Email</label>
                                            <input
                                                type="text"
                                                name="email"
                                                style={{
                                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                                }}
                                                className="input input-bordered w-full bg-gray-700" placeholder="Email"
                                                {...register('email', { required: true })}
                                            />
                                            {errors.email && <span className="text-red-500 text-sm pl-2">Email is required**</span>}
                                        </div>
                                        <div className="mb-3 gap-2">
                                            <div className="w-full flex gap-2 justify-center">
                                                <div className="w-[50%] ">
                                                    <div className="relative">
                                                        <label className="text-sm" htmlFor="password">Password</label>
                                                        <input
                                                            type={viewPassword ? 'text' : 'password'}
                                                            name="password"
                                                            placeholder="Password"
                                                            style={{
                                                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                                            }}
                                                            className="input input-bordered w-full bg-gray-700"
                                                            {
                                                            ...register('password', { required: true })
                                                            }
                                                        />

                                                        <span
                                                            onClick={() => setViewPassword(!viewPassword)}
                                                            className="absolute top-[55%] right-3 cursor-pointer">
                                                            {
                                                                viewPassword ?
                                                                    (

                                                                        <IoMdEye className="text-gray-400 text-xl" />
                                                                    ) :
                                                                    (
                                                                        <IoMdEyeOff className="text-gray-400 text-xl" />
                                                                    )
                                                            }

                                                        </span>
                                                    </div>
                                                    {
                                                        errors.password && (
                                                            <span className="text-red-500 text-sm pl-2">Password is required**</span>
                                                        )
                                                    }

                                                </div>
                                                <div className="w-[50%]">
                                                    <div className="relative">
                                                        <label className="text-sm" htmlFor="confirmPassword">Confirm Password <sup className="text-red-500">*</sup></label>
                                                        <input
                                                            type={viewConfirmPassword ? 'text' : 'password'}
                                                            name="confirmPassword"
                                                            placeholder="Confirm Password"
                                                            style={{
                                                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                                            }}
                                                            className="input input-bordered w-full bg-gray-700"
                                                            {
                                                            ...register('confirmPassword', { required: true })
                                                            }
                                                        />

                                                        <span
                                                            onClick={() => setViewConfirmPassword(!viewConfirmPassword)}
                                                            className="absolute top-[55%] right-3 cursor-pointer">
                                                            {
                                                                viewConfirmPassword ?
                                                                    (
                                                                        <IoMdEye className="text-gray-400 text-xl" />

                                                                    ) :
                                                                    (
                                                                        <IoMdEyeOff className="text-gray-400 text-xl" />
                                                                    )
                                                            }

                                                        </span>
                                                    </div>
                                                    {
                                                        errors.confirmPassword && (
                                                            <span className="text-red-500 text-sm pl-2">Confirm Password is required**</span>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <button className="py-3 text-black w-full bg-yellow-500 mt-5 rounded-md ">Sign in</button>
                                    </form>
                                </div>
                                <div className="text-end">
                                    <p>Don't have an account? <NavLink to="/signup" className="text-yellow-500 cursor-pointer underline">Register</NavLink> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login