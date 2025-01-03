import { apiConnector } from '../apiconnector';
import { profileEndPoints } from '../apis';
import { toast } from 'react-hot-toast';

const { UPDATE_PROFILE_IMAGE_API,UPDATE_PROFILE_ABOUT_API } = profileEndPoints;

export const updateProfileMain = async(formData,token) => { 

    const toastId = toast.loading('Loading...');
    let result = [];
    try {

       const response = await apiConnector('POST', UPDATE_PROFILE_IMAGE_API, formData,
            {
                'Authorization': `Bearer ${token}`,
            }
        );

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }
       
        toast.success(response.data.message);
        result = response.data.data;

    } catch (error) { 

        console.log("Error ::", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;

}

export const updateProfileAbout = async (formData, token) => { 

    let result = [];
    const toastId = toast.loading('Loading...');
    try {

        const response = await apiConnector('POST', UPDATE_PROFILE_ABOUT_API, formData,
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
    }

    toast.dismiss(toastId);
    return result;
}