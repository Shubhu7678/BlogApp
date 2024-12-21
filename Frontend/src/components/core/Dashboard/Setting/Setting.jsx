import ProfileMain from "./ProfileMain"

const Setting = () => {
    return (
        <div className="bg-gray-900 h-[calc(100vh-64px)] overflow-x-auto w-full">
            <div className=" w-[850px] h-full mx-auto pt-8">
                <h2 className="text-3xl font-sans text-gray-300 ">Add Category</h2>
                <div className="w-full mt-8">
                      <ProfileMain/>
                </div>
            </div>
        </div>
    )
}

export default Setting