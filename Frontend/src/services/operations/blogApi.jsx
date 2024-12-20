import { apiConnector } from '../apiconnector';
import { blogEndPoints } from '../apis';
import { toast } from 'react-hot-toast'

const { CREATE_BLOG_API, GET_ALL_BLOGS_API,GET_BLOG_BY_ID_API,UPDATE_BLOG_API } = blogEndPoints;

export const addBlogData = async (formData, token) => {

    const toastId = toast.loading('Loading...');
    let result = [];

    try {

        const response = await apiConnector('POST', CREATE_BLOG_API, formData,
            {

                'Authorization': `Bearer ${token}`,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        )

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;
        toast.success(response.data.message);

    } catch (error) {

        console.log("Add Blog Error Occured : ", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

export const getAllBlogs = async (token) => {

    let result = [];
    const toastId = toast.loading('Loading...');
    try {

        const response = await apiConnector('GET', GET_ALL_BLOGS_API, {},
            {
                'Authorization': `Bearer ${token}`,
            }
        );

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) {

        console.log("Get All Blogs Error Occured : ", error);
        toast.error(error.response.data.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const getBlogDataById = async (blogId, token) => {

    const toastId = toast.loading('Loading...');
    let result = [];
    try {

        const response = await apiConnector('GET', `${GET_BLOG_BY_ID_API}/${blogId}`, {},
            {
                'Authorization': `Bearer ${token}`
            }
        );

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) {

        console.log("Error occured ::", error);
        toast.error(error.response.data.message);

    }
    toast.dismiss(toastId);
    return result;
}

export const updateCategoryData = async(formData, token) => { 

    const toastId = toast.loading('Loading...');
    let result = [];
    try {

        const response = await apiConnector('POST', UPDATE_BLOG_API, formData,
            {
                'Authorization' : `Bearer ${token}`,
            },
        )
        
        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;
    } catch (error) { 

        console.log("Error occured ::", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}