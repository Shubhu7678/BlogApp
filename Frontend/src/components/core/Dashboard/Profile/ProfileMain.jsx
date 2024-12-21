import { NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'

const ProfileMain = () => {

    const { user } = useSelector((state) => state.profile);
    console.log(user);

    return (
        <div className="bg-gray-800 w-full py-4 px-8 mt-8">
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2">
                            <img src={user?.userImage} alt="User" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-0">
                        <h1 className="text-gray-300 text-lg ">{user?.firstName + " " + user?.lastName}</h1>
                        <p className="text-gray-400 text-base">{user?.email}</p>
                    </div>
                </div>
                <div>
                    <NavLink to="/dashboard/setting" className="bg-yellow-700 text-white px-4 py-2 rounded-sm hover:bg-yellow-800 duration-300 text-base font-mono">Edit</NavLink>
                </div>

            </div>
        </div>
    )
}

export default ProfileMain