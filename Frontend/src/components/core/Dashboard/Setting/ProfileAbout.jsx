

const ProfileAbout = () => {
    return (
        <div className="w-full bg-gray-800">
            <div className="w-full flex gap-6 py-4 px-8">
                <div className="flex flex-col gap-3 w-full">
                    <div className="text-lg text-gray-300">
                        Profile Information
                    </div>
                    <div className="w-full">
                        <form>
                            <div className="flex gap-4 w-full mb-2">
                                <div className="w-full">
                                    <label className="text-gray-400">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-700 text-gray-300 p-2 rounded-md"
                                        placeholder="Enter First Name"
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="text-gray-400">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-700 text-gray-300 p-2 rounded-md"
                                        placeholder="Enter Last Name"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 w-full mb-2">
                                <div className="w-full">
                                    <label className="text-gray-400">Date of Birth</label>
                                    <input
                                        type="date"
                                        className="w-full bg-gray-700 text-gray-300 p-2 rounded-md"
                                        placeholder="Enter Date of Birth"
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="text-gray-400">Gender</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-700 text-gray-300 p-2 rounded-md"
                                        placeholder="Enter Gender"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 w-full">
                                <div className="w-full">
                                    <label className="text-gray-400">Contact Number</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-700 text-gray-300 p-2 rounded-md"
                                        placeholder="Enter Contact Number"
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="text-gray-400">About</label>
                                    <textarea
                                        rows={1}
                                        className="w-full bg-gray-700 text-gray-300 p-2 rounded-md"
                                        placeholder="Enter About"
                                    />
                                </div>
                            </div>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileAbout