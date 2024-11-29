import React, { useState } from "react";
import { indianStates } from "../../../../data/StatesData";
import { ImCancelCircle } from "react-icons/im";
import { useForm } from 'react-hook-form';


const BlogForm = () => {

    // console.log(indianStates); 

    const [blogTags, setBlogTags] = useState([]);

    const handleTagsChange = (e) => {

        if (e.key === 'Enter' || e.key === ',') {

            setBlogTags([...blogTags, e.target.value]);
            e.target.value = '';
        }
    }

    const removeBlogTags = (index) => {

        setBlogTags(blogTags.filter((tag, i) => index !== i));
    }

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    const onSubmit = (data) => {

        console.log(data);
        
    }


    return (
        <div className="bg-gray-800 rounded-md mt-8 text-gray-200 p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 text-gray-400">
                <div className="w-full">
                    <label htmlFor="blogTitle">Blog Title <sup className="text-red-500">*</sup></label>
                    <input
                        type="text"
                        name="blogTitle"
                        placeholder="Enter Blog Title"
                        className="py-2 px-2 mt-1 w-full bg-gray-900 border-b-[1px] border-gray-500 outline-none text-gray-400 rounded-md"
                        {...register("blogTitle", { required: true })}
                    />
                    {errors.blogTitle && <span className="text-red-500 text-sm">Blog Title is required</span>}
                </div>
                <div>
                    <label htmlFor="blogDescription">Blog Description</label>
                    <textarea
                        name="blogDescription"
                        id="blogDescription"
                        rows="5"
                        placeholder="Enter Blog Description"
                        className="bg-gray-900 p-2 mt-1 w-full border-b-[1px] border-gray-500 outline-none rounded-md"
                        {...register("blogDescription", { required: true })}
                    />
                    {errors.blogDescription && <span className="text-red-500 text-sm">Blog Description is required</span>}
                </div>
                <div>
                    <label htmlFor="city">Choose City</label>
                    <select
                        name="city"
                        id="city"
                        className="py-2 px-2 mt-1 w-full bg-gray-900 border-b-[1px] border-gray-500 outline-none text-gray-400 rounded-md"
                        {...register("city", { required: true })}
                    >
                        <option value="">Select City</option>
                        {
                            indianStates.map((state, index) => (

                                <option key={index} value={state}>{state}</option>
                            ))
                        }

                    </select>
                    {errors.city && <span className="text-red-500 text-sm">City is required</span>}
                </div>
                <div>
                    <label htmlFor="">Tags</label>
                    {
                        blogTags.length > 0 && (

                            <div className="flex mt-1 gap-1 flex-wrap">
                                {
                                    blogTags.map((tag, index) => (
                                        <div key={index} className="bg-yellow-600 px-2 py-2 rounded-md text-gray-950 flex items-center gap-1">
                                            <span className="text-sm">{tag}</span>
                                            <ImCancelCircle
                                                onClick={() => removeBlogTags(index)}
                                                className="text-sm cursor-pointer" />
                                        </div>
                                    ))
                                }
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
                        {...register("tags", { required: true })}
                    />
                    {errors.tags && <span className="text-red-500 text-sm">Tags are required</span>}
                </div>
                <div>
                    <label htmlFor="">Category</label>
                    <select
                        name="category"
                        id="category"
                        className="py-2 px-2 mt-1 w-full bg-gray-900 border-b-[1px] border-gray-500 outline-none text-gray-400 rounded-md"
                        {...register("category", { required: true })}
                    >
                        <option value="">Select City</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                    {errors.category && <span className="text-red-500 text-sm">Category is required</span>}
                </div>
                <div>
                    <label htmlFor="blogThumbnail">Blog Thumbnail</label>
                    <input
                        type="file"
                        name="blogThumbnail"
                        className="py-2 px-2 mt-1 w-full bg-gray-900 border-b-[1px] border-gray-500 outline-none text-gray-400 rounded-md"
                        {...register("blogThumbnail", { required: true })}
                    />
                    {errors.blogThumbnail && <span className="text-red-500 text-sm">Blog Thumbnail is required</span>}
                </div>
                <div className="flex justify-start">
                    <button
                        type="submit"
                        className="py-2 px-4 mt-3 font-mono bg-yellow-600 text-gray-900 rounded-sm hover:bg-yellow-700 duration-300"
                    >Submit</button>
                </div>
            </form>
        </div>
    )

}

export default BlogForm;