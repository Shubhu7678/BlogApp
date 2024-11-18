import { apiConnector } from "../apiconnector";
import { authEndPoints } from "../apis";
import { toast } from "react-hot-toast";

const { SIGNUP_API } = authEndPoints;

export const signup = async(data) => { 

    try {

        console.log(SIGNUP_API);
        console.log("DAta : ", data);
        const response = await apiConnector('POST', SIGNUP_API, data );
        
        if (!response.data.success) { 

            throw new Error(response.data.message);
        }
        
        toast.success(response.data.message);
        console.log(response);

    } catch (error) { 

        console.log("Signup Error Occured : ", error);
        toast.error(error.message);

    }
}