
import CardBlog from './CardBlog'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllBlogsForHomePage } from '../../../services/operations/blogApi'
import {setTotalBlogs} from '../../../slices/blogSlice'

const AllBlogComponents = () => {

    const { totalBlogs } = useSelector((state) => state.blog);
    const dispatch = useDispatch();
    

    useEffect(() => {
    
            const getBlogsData = async () => {
    
                const blogs = await getAllBlogsForHomePage();
                dispatch(setTotalBlogs(blogs));
            }
    
            getBlogsData();
    
        }, [dispatch])
    return (
        <div className="mt-8 pb-8  h-full w-10/12 mx-auto">
            <div className="h-full">
                <div className="w-full grid grid-cols-3 gap-8">
                    { 
                        totalBlogs.map((blog, index) => (
                           
                            <CardBlog key={index} blog={blog} />
                       ))
                    }  
                </div>
            </div>

        </div>
    )
}

export default AllBlogComponents