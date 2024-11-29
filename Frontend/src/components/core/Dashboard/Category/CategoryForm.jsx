import React,{useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { addCategoryData } from '../../../../services/operations/categoryApis';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import {setCategories} from '../../../../slices/categorySlice';

const CategoryForm = () => {

    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const { categories, editCategory, category } = useSelector((state) => state.category);
    const dispatch = useDispatch();


    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        reset,
        formState : {errors,isSubmitSuccessful},
    } = useForm();
    
    const onSubmit = async(data) => { 

        // console.log(data);
       const result = await addCategoryData(data,token);
        if (result) { 

            reset();
            dispatch(setCategories([...categories, result]));
            navigate('/dashboard/categories');
        }
    }

    useEffect(() => { 

        if (editCategory) { 

            setValue('name', category.name);
            setValue('description', category.description);

        }

    },[editCategory,category,setValue])

  return (
      <div>
          <div className="bg-gray-800 rounded-md mt-8 text-gray-200 p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 text-gray-400">
                <div className="w-full">
                    <label htmlFor="name">Category Name <sup className="text-red-500">*</sup></label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Category Name"
                          className="py-2 px-2 mt-1 w-full bg-gray-900 border-b-[1px] border-gray-500 outline-none text-gray-400 rounded-md"  
                          {...register('name', {required : true})}  
                      />
                      { 
                          errors.name && <span className="text-red-500 text-sm">Category Name is required **</span>
                      }
                </div>
                <div className="mt-2">
                    <label htmlFor="description">Category Description</label>
                    <textarea
                        name="description"
                        id="description"
                        rows="5"
                        placeholder="Enter Description"
                        className="bg-gray-900 p-2 mt-1 w-full border-b-[1px] border-gray-500 outline-none rounded-md"
                        {...register('description',{required : true})}
                      />
                      { 
                          errors.description && <span className="text-red-500 text-sm">Category Description is required **</span>
                      }
                  </div>               
               
                <div className="flex justify-start">
                    <button
                        type="submit"
                        className="py-2 px-4 mt-3 font-mono bg-yellow-600 text-gray-900 rounded-sm hover:bg-yellow-700 duration-300"
                    >Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CategoryForm