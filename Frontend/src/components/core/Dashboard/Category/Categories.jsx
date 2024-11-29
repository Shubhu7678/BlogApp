import React, { useEffect } from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllCategories } from '../../../../services/operations/categoryApis';
import { setCategories } from '../../../../slices/categorySlice';

const Categories = () => {

    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);
    useEffect(() => {

        const allCategories = async () => {

            const result = await getAllCategories(token);
            dispatch(setCategories(result));
        }

        allCategories();
    }, [])

    console.log(categories);

    return (
        <div className="bg-gray-900 h-[calc(100vh-64px)] overflow-x-auto w-full">
            <div className=" w-[850px] h-full mx-auto pt-8">
                <div className="flex justify-between" >
                    <h2 className="text-3xl font-sans text-gray-300 ">Categories</h2>
                    <NavLink
                        to="/dashboard/categories/add-category"
                        className="px-3 py-2 bg-yellow-600 rounded-md text-gray-900 font-mono flex items-center gap-2"
                    >
                        <IoMdAddCircle /> <span>Add Category</span></NavLink>

                </div>
                <div className="text-white mt-8" >
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-white">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories.length > 0 && (
                                        categories.map((category, index) => (
                                            <tr key={index}>
                                                <th>1</th>
                                                <td>{ category?.name }</td>
                                                <td>{ category?.description }</td>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <NavLink
                                                            to={`/dashboard/categories/${category?._id}`}
                                                            className="w-fit px-3 py-2 bg-green-500 rounded-md text-white font-mono flex items-center gap-2"
                                                        >
                                                            <span>Edit</span>
                                                        </NavLink>
                                                        <NavLink
                                                            to="/dashboard/categories/1"
                                                            className="w-fit px-3 py-2 bg-orange-600 rounded-md text-gray-100 font-mono flex items-center gap-2"
                                                        >
                                                            <span>Delete</span>
                                                        </NavLink>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }


                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Categories