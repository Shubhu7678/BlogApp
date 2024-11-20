import React,{useState} from "react";
import { indianStates } from "../../../../data/StatesData";
import { ImCancelCircle } from "react-icons/im";


const BlogForm = () => {

    // console.log(indianStates); 
    
    const [blogTags, setBlogTags] = useState([]);

    const handleTagsChange = (e) => { 

        // console.log(e.target.value);
        // console.log(e.key);
        console.log(e.target.value);
    }
    return (
        <div className="bg-gray-800 rounded-md mt-8 text-gray-200 p-4">
            <form className="flex flex-col gap-2 text-gray-400">
                <div className="w-full">
                    <label htmlFor="blogTitle">Blog Title <sup className="text-red-500">*</sup></label>
                    <input
                        type="text"
                        name="blogTitle"
                        placeholder="Enter Blog Title"
                        className="py-2 px-2 mt-1 w-full bg-gray-900 border-b-[1px] border-gray-500 outline-none text-gray-400 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="blogDescription">Blog Description</label>
                    <textarea
                        name="blogDescription"
                        id="blogDescription"
                        rows="5"
                        placeholder="Enter Blog Description"
                        className="bg-gray-900 p-2 mt-1 w-full border-b-[1px] border-gray-500 outline-none rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="city">Choose City</label>
                    <select
                        name="city"
                        id="city"
                        className="py-2 px-2 mt-1 w-full bg-gray-900 border-b-[1px] border-gray-500 outline-none text-gray-400 rounded-md">
                        <option value="">Select City</option>
                        {
                            indianStates.map((state, index) => (

                                <option key={index} value={state}>{state}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="">Tags</label>
                    {
                        blogTags.length > 0 && (
                            <div className="flex mt-1 gap-1 flex-wrap">
                                <div className="bg-yellow-600 px-2 py-2 rounded-md text-gray-950 flex items-center gap-1">
                                    <span className="text-sm">Tournament</span>
                                    <ImCancelCircle className="text-sm" />
                                </div>
                            </div>
                        )
                    }
                    <input
                        type="text"
                        name="tags"
                        id="tags"
                        onKeyDown={handleTagsChange}
                        placeholder="Enter tags"
                        className="py-2 px-2 mt-1 w-full bg-gray-900 border-b-[1px] border-gray-500 outline-none text-gray-400 rounded-md"
                    />
                </div>
            </form>
        </div>
    )

}

export default BlogForm;