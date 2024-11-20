import { apiConnector } from "../apiconnector";
import { authEndPoints } from "../apis";
import { toast } from "react-hot-toast";
import { setToken } from "../../slices/authSlice";
import {setUser } from '../../slices/profileSlice'

const { SIGNUP_API,LOGIN_API,LOGOUT_API } = authEndPoints;

export const signup = async(data,navigate) => { 

    try {

        const response = await apiConnector('POST', SIGNUP_API, data );
        
        if (!response.data.success) { 

            throw new Error(response.data.message);
        }
        
        toast.success(response.data.message);
        navigate('/login');
        // console.log(response);

    } catch (error) { 

        console.log("Signup Error Occured : ", error);
        toast.error(error.message);

    }
}

export const login = async (data, navigate, dispatch) => {

    const toastId = toast.loading('Loading...');
    try {

        console.log(LOGIN_API);

        const response = await apiConnector('POST', LOGIN_API, data);

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        toast.success(response.data.message);
        console.log(response);

           localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('user', JSON.stringify(response.data.data));

        dispatch(setToken(response.data.token));
        dispatch(setUser(response.data.data));
        navigate('/dashboard/my-profile');

    } catch (error) { 

        console.log("Login Error Occured : ", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
}
 
export const logout = async(navigate,dispatch) => { 

    const toastId = toast.loading('Loading...');
    try {

        const response = await apiConnector("POST", LOGOUT_API, {});

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        toast.success(response.data.message);
        dispatch(setToken(''));
        dispatch(setUser(''));
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        toast.dismiss(toastId);
        navigate('/login');

    } catch (error) { 

        console.log("Logout Error Occured : ", error);
        toast.error(error.response.data.message);
        toast.dismiss(toastId);
    }

}