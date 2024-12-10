import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";

import { categoryEndPoints } from '../apis';

const { CREATE_CATEGORY_API,GET_ALL_CATEGORIES_API,GET_CATEGORY_BY_ID_API,UPDATE_CATEGORY_API } = categoryEndPoints;

export const addCategoryData = async (data,token) => { 

    let result = [];
    const toastId = toast.loading('Loading...');
    try {
        
        const response = await apiConnector('POST', CREATE_CATEGORY_API, data,
            {
                'Authorization' : `Bearer ${token}`
            }
        )
        
        if (!response.data.success) { 

            throw new Error(response.data.message);
        }
        
        result = response.data.data;
        toast.success(response.data.message);

    } catch (error) { 

        console.log("Add Category Error Occured : ", error);
        toast.error(error.response.data.message);

    }

    toast.dismiss(toastId);
    return result;

}

export const getAllCategories = async (token) => { 

    let result = [];
    const toastId = toast.loading('Loading...');
    try {

        const response = await apiConnector('GET', GET_ALL_CATEGORIES_API, {},
            {
                'Authorization' : `Bearer ${token}`
            }
        )

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;
        // toast.success(response.data.message);

    } catch (error) { 

        console.log("Get All Categories Error Occured : ", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

export const getCategoryById = async (categoryId,token) => { 

    let result = [];
    const toastId = toast.loading('Loading...');
    try {

        const response = await apiConnector('GET', `${GET_CATEGORY_BY_ID_API}/${categoryId}`, {},
            {
                'Authorization' : `Bearer ${token}`
            }
        )

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) { 

        console.log("Get Category By ID Error Occured : ", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

export const updateCategoryData = async (formData, token) => {
     
    let result = [];
    const toastId = toast.loading('Loading...');
     for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
}

    try {

        const response = await apiConnector('POST', UPDATE_CATEGORY_API, formData, {

            'Authorization' : `Bearer ${token}`
        })

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;
        toast.success(response.data.message);

    } catch (error) { 

        console.log("Update Category Error Occured : ", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;

}