import React from 'react'
import Navbar from '../components/common/Navbar'
import MainBlog from '../components/core/Home/MainBlog'
import AllBlogComponents from '../components/core/Home/AllBlogComponents'

const Home = () => {
    return (
        <div className="w-full">
            <div className="w-full min-h-[calc(100vh-64px)] bg-gradient-to-b from-black via-black to-gray-800 text-white">
            {/* section 1  */}
                <MainBlog />
                {/* section 2  */} 
                <AllBlogComponents />

                
           </div>
 
            

        </div>
    )
}

export default Home