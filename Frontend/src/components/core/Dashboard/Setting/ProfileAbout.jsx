import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateProfileAbout } from '../../../../services/operations/profileApis';
import { setUser } from '../../../../slices/profileSlice';

const ProfileAbout = () => {

    const btnRef = useRef(null);
    const { user } = useSelector((state) => state.profile);
    console.log(user);
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const { register, setValue,getValues, handleSubmit } = useForm();
    
    useEffect(() => { 
         
        setValue("firstName", user?.firstName);
        setValue("lastName", user?.lastName);
        setValue("dateOfBirth", user?.additionalDetails?.dateOfBirth);
        setValue("gender", user?.additionalDetails?.gender);
        setValue("contact", user?.additionalDetails?.contact);
        setValue("about", user?.additionalDetails?.about);

    }, [user, setValue]);

    const formChanged = () => { 
        const newData = getValues();
        if(user?.firstName !== newData.firstName || user?.lastName !== newData.lastName || user?.additionalDetails?.dateOfBirth !== newData.dateOfBirth || user?.additionalDetails?.gender !== newData.gender || user?.additionalDetails?.contact !== newData.contact || user?.additionalDetails?.about !== newData.about){
            return true;
        } else {
            return false;
        }
        
    }
    
    const onSubmit = async(data) => { 

        // Update profile information   
        if (formChanged()) { 

            const formData = {};
            if (user?.firstName !== data.firstName) { 
                formData.firstName = data.firstName;
            }
            if (user?.lastName !== data.lastName) { 
                formData.lastName = data.lastName;
            }
            if (user?.additionalDetails?.dateOfBirth !== data.dateOfBirth) { 
                
                formData.dateOfBirth = data.dateOfBirth;
            }
            if (user?.additionalDetails?.gender !== data.gender) { 
                
                formData.gender = data.gender;
            }
            if (user?.additionalDetails?.contact !== data.contact) { 
        
                formData.contact = data.contact;
            }
            if (user?.additionalDetails?.about !== data.about) { 
            
                formData.about = data.about;
            }
            
            try {

                const result = await updateProfileAbout(formData, token);
                if (result) { 

                    // console.log(result);
                    dispatch(setUser(result));
                }

            } catch (error) { 

                console.log("Error Occured ::", error);
            }
            
        }
    }

    return (
        <div className="w-full">
            <div className="w-full bg-gray-800">
                <div className="w-full flex gap-6 py-4 px-8">
                    <div className="flex flex-col gap-3 w-full">
                        <div className="text-lg text-gray-300">
                            Profile Information
                        </div>
                        <div className="w-full">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex gap-4 w-full mb-2">
                                    <div className="w-full">
                                        <label className="text-gray-400">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                        
                                            className="w-full bg-gray-700 text-gray-300 p-2 rounded-md"
                                            placeholder="Enter First Name"
                                            {...register("firstName")}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="text-gray-400">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="w-full bg-gray-700 text-gray-300 p-2 rounded-md"
                                            placeholder="Enter Last Name"
                                            {...register("lastName")}
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4 w-full mb-2">
                                    <div className="w-full">
                                        <label className="text-gray-400">Date of Birth</label>
                                        <input
                                            type="date"
                                            name="dataOfBirth"
                                            className="w-full bg-gray-700 text-gray-300 p-2 rounded-md"
                                            placeholder="Enter Date of Birth"
                                            {...register("dateOfBirth")}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="text-gray-400">Gender</label>
                                        <input
                                            type="text"
                                            name="gender"
                                            className="w-full bg-gray-700 text-gray-300 p-2 rounded-md"
                                            placeholder="Enter Gender"
                                            {...register("gender")}
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4 w-full">
                                    <div className="w-full">
                                        <label className="text-gray-400">Contact Number</label>
                                        <input
                                            type="text"
                                            name="contact"
                                            className="w-full bg-gray-700 text-gray-300 p-2 rounded-md"
                                            placeholder="Enter Contact Number"
                                            {...register("contact")}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="text-gray-400">About</label>
                                        <textarea
                                            rows={1}
                                            name="about"
                                            className="w-full bg-gray-700 text-gray-300 p-2 rounded-md"
                                            placeholder="Enter About"
                                            {...register("about")}
                                        />
                                    </div>
                                </div>
                                <button
                                    ref={btnRef}
                                    className="hidden"
                                    type="submit" >
                                   
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-5 flex justify-end">
                <div className="flex gap-3">
                    <button
                        
                        className="bg-gray-700 text-white py-2 px-4 rounded-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => btnRef.current.click()}
                        className="bg-yellow-800 text-white py-2 px-6 rounded-sm"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileAbout