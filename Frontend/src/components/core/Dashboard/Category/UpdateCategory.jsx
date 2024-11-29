import React, { useEffect } from 'react'
import CategoryForm from './CategoryForm'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getCategoryById } from '../../../../services/operations/categoryApis';
import { setCategory, setEditCategory} from '../../../../slices/categorySlice';

const UpdateCategory = () => {

    const { token } = useSelector((state) => state.auth);
    const { categoryId } = useParams();
    // console.log(categoryId);
    const dispatch = useDispatch();

    useEffect(() => { 

        const getRelatedCategory = async () => { 
             
            const result = await getCategoryById(categoryId,token);
            console.log("result : ", result);
            dispatch(setCategory(result));
            dispatch(setEditCategory(true));
        }

        getRelatedCategory();

    },[])

    return (
        <div className="bg-gray-900 h-[calc(100vh-64px)] overflow-x-auto w-full">
            <div className=" w-[850px] h-full mx-auto pt-8">
                <h2 className="text-3xl font-sans text-gray-300 ">Edit Category</h2>
                <CategoryForm />
            </div>
        </div>
    )
}

export default UpdateCategory