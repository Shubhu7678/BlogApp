import React from 'react'
import CardBlog from './CardBlog'

const AllBlogComponents = () => {
    return (
        <div className="mt-8 pb-8  h-full w-9/12 mx-auto">
            <div className="h-full">
                <div className="w-full flex justify-center gap-7 flex-wrap">
                    <CardBlog/>
                    <CardBlog/>
                    <CardBlog/>   
                </div>
            </div>

        </div>
    )
}

export default AllBlogComponents