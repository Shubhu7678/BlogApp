
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { login } from '../services/operations/authApis'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {

        try {

           await login(data, navigate, dispatch);

        } catch (error) { 

            console.log("Login Error Occured : ", error);
        }
    }
    return (
        <div className="bg-gray-900">
            <div className="w-11/12 mx-auto h-[calc(100vh-64px)] flex items-center justify-center">
                <div className="w-full flex items-center justify-center">
                    <div className="text-white w-full md:w-[40%]">
                        <div className="w-full p-2  md:p-8">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-4xl font-semibold">Login to your account</h1>
                                <p className="text-sm font-normal text-gray-400">Welcome Back login to continue. </p>
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="mb-3">
                                            <label className="text-sm" htmlFor="email">Email <sup className="text-red-500">*</sup></label>
                                            <input
                                                type="text"
                                                name="email"
                                                style={{
                                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                                }}
                                                className="input input-bordered w-full bg-gray-700" placeholder="Email"
                                                {...register('email', { required: true })}
                                            />
                                            {errors.email && <span className="text-red-500 text-sm pl-2 ">Email is required**</span>}
                                        </div>
                                        <div className="mb-3 gap-2">
                                            <label className="text-sm" htmlFor="password">Password <sup className="text-red-500">*</sup></label>
                                            <input
                                                type="text"
                                                name="password"
                                                style={{
                                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                                }}
                                                className="input input-bordered w-full bg-gray-700" placeholder="Password"
                                                {...register('password', { required: true })}
                                            />
                                            {errors.password && <span className="text-red-500 text-sm pl-2">Password is required**</span>}
                                        </div>
                                        <button className="py-3 text-black w-full bg-yellow-500 mt-5 rounded-md ">Login</button>
                                    </form>
                                </div>
                                <div className="text-end">
                                    <p>Do not have an account? <NavLink to="/signup" className="text-yellow-500 cursor-pointer underline">Register</NavLink> </p>
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