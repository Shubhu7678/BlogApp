import { useRef } from "react"
import { FiUpload } from "react-icons/fi";

const ProfileMain = () => {

    const profileImage = useRef(null);
    return (
        <div className="w-full bg-gray-800">
            <div className="w-full flex gap-6 py-4 px-8">
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-lg text-gray-300">
                        Change Profile Picture
                    </div>
                    <div>
                        <form>
                            <div className="flex gap-2">
                                <label onClick={() => profileImage.current.click()} className="rounded-sm text-white px-4  text-base font-mono py-2 bg-gray-700" htmlFor="userImage">Select</label>
                                <input type="file" ref={profileImage} name="userImage" className="hidden" />
                                <button className="flex items-center rounded-sm gap-1 text-white px-4  text-base font-mono py-2 bg-yellow-700">
                                    <span>
                                      Upload
                                    </span>
                                    <FiUpload className="text-base" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMain