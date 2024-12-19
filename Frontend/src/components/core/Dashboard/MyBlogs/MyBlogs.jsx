import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import { IoMdAdd } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../../../services/operations/blogApi';
import { setTotalBlogs } from '../../../../slices/blogSlice';

const MyBlogs = () => {

    const { token } = useSelector((state) => state.auth);
    const { totalBlogs } = useSelector((state) => state.blog);
    const dispatch = useDispatch();

    useEffect(() => {

        const getBlogsData = async () => {

            const blogs = await getAllBlogs(token);
            // console.log(blogs);
            dispatch(setTotalBlogs(blogs));
        }

        getBlogsData();

    }, [dispatch, token])

    const truncateDescription = (description) => { 

        const words = description.split(' ');
        const fiveWords = words.slice(0, 5).join(" ");
        return words.length > 5 ? fiveWords + '...': fiveWords;
    }

    const deleteBlogData = () => { 

        // TODO: Implement delete blog functionality
    }

    return (
        <div className="bg-gray-900 h-[calc(100vh-64px)] overflow-x-auto w-full">
            <div className=" w-[850px] h-full mx-auto pt-8">
                <div className="flex justify-between" >
                    <h2 className="text-3xl font-sans text-gray-300 ">Categories</h2>
                    <NavLink
                        to="/dashboard/add-blog"
                        className="px-3 py-2 bg-yellow-600 rounded-md text-gray-900 font-mono flex items-center gap-2"
                    >
                        <IoMdAddCircle /> <span>Add Blog</span></NavLink>

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
                                    totalBlogs && totalBlogs.map((blog, index) => (
                                        <tr key={index}>
                                            <th>{index + 1 }</th>
                                            <td>{ blog.blogTitle }</td>
                                            <td>{truncateDescription(blog.blogDescription)}</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <NavLink
                                                        to={`/dashboard/edit-blog/${blog._id}`}
                                                        className="w-fit px-3 py-2 bg-green-500 rounded-md text-white font-mono flex items-center gap-2"
                                                    >
                                                        <span>Edit</span>
                                                    </NavLink>
                                                    <NavLink
                                                        onClick={() => deleteBlogData(blog?._id)}
                                                        className="w-fit px-3 py-2 bg-orange-600 rounded-md text-gray-100 font-mono flex items-center gap-2"
                                                    >
                                                        <span>Delete</span>
                                                    </NavLink>
                                                </div>
                                            </td>
                                        </tr>

                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MyBlogs