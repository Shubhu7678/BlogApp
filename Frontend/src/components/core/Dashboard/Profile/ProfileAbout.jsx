import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const ProfileAbout = () => {

    const { user } = useSelector((state) => state.profile);
    return (
        <div className="bg-gray-800 w-full py-4 px-8 mt-8">
            <div className="w-full flex justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-lg text-gray-300">About</h1>
                    <p className="text-sm text-gray-400">{ user?.additionalDetails?.about ?? "Write something about yourself" }</p>
                </div>
                <div>
                    <NavLink to="/dashboard/setting" className="bg-yellow-700 text-white px-4 py-2 rounded-sm hover:bg-yellow-800 duration-300 text-base font-mono">Edit</NavLink>
                </div>
             </div>

        </div>
    )
}

export default ProfileAbout