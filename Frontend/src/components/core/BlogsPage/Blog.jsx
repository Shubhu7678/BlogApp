import { useEffect } from "react"


const Blog = () => {

  useEffect(() => {

    const fetchBlogData = async () => {

      console.log('ejdjd');

    }

    fetchBlogData();

  }, [])
  return (
    <div className="bg-gray-600 w-full h-[calc(100vh-64px)] overflow-y-auto">
      <div>
        <div className="bg-gray-900 w-[50%]  mx-auto p-8 mt-4">
          <h1 className="text-3xl font-bold text-gray-100">Welcome to HustleUp Blog</h1>
          <p className="text-gray-300 text-lg">
            Explore our blog for the latest updates, insights, and product tips.
          </p>
          <div className="mt-4">
             <img className="w-[100%] object-cover" src="" alt="Image" />
          </div>
          <div className="mt-2 flex text-gray-300 justify-between">
            <p>User</p>
            <p>Date</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog