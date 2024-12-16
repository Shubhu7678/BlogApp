import react, { useEffect } from 'react';
import BlogForm from './BlogForm';
import { BsCloudLightningRain } from "react-icons/bs";
import { setEditBlog } from '../../../../slices/blogSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const EditBlog = () => { 

  const { editBlog } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const { blogId } = useParams();
  console.log(blogId);

    useEffect(() => { 
       
      dispatch(setEditBlog(true));
        
    },[])

    return (
        <div className="bg-gray-900 h-[calc(100vh-64px)] overflow-y-auto w-full">
      <div className=" w-[850px]  flex gap-4 mx-auto pt-8">
        <div className="w-[55%] p-4">
          <h2 className="text-3xl font-sans text-gray-300 ">Edit Blog</h2>
          <BlogForm />
        </div>
        <div className="pl-8 pr-8 py-4 w-[40%] h-fit bg-gray-800">
          <div className="flex items-center gap-2">
            <BsCloudLightningRain className="text-yellow-500 text-lg" />
            <h1 className="text-lg text-gray-200 mb-2">Blog Upload Tips</h1>
          </div>
          <ul className="text-gray-200 list-disc flex flex-col gap-1 text-sm">
            <li>Choose a catchy title to grab attention.</li>
            <li>Use high-quality images for better engagement.</li>
            <li>Be clear and concise to improve readability.</li>
            <li>Write a brief summary to outline the blog's key points.</li>
            <li>Add relevant tags to make your blog easier to find.</li>
            <li>Check grammar and spelling for a polished result.</li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default EditBlog