import { apiConnector } from '../apiconnector';
import { blogEndPoints } from '../apis';
import { toast } from 'react-hot-toast'

const { CREATE_BLOG_API } = blogEndPoints;

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