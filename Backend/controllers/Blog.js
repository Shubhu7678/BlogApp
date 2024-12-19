import Blog from '../models/Blog.js';
import User from '../models/user.js';

export const addBlog = async (req, res) => {

    try {

        const { blogTitle, blogDescription, city, tags, category } = req.body;
        const thumbnail = req.file ? req.file.path : null;
        const authorId = req.user.id;

        if (!blogTitle || !blogDescription || !city || !tags || !category) {

            return res.status(400).json({

                success: false,
                message: 'All fields are required',
            });
        }

        if (!thumbnail) {

            return res.status(400).json({

                success: false,
                message: 'Please upload a thumbnail',
            });
        }

        const parsedTags = JSON.parse(tags);

        const newBlog = await Blog.create({
            blogTitle,
            blogDescription,
            city,
            tags: parsedTags,
            category,
            thumbnail,
            author: authorId,
        });

        const updateUser = await User.findByIdAndUpdate(
            authorId,
            {
                $push: {
                    blogs: newBlog._id
                }
            }
        )

        res.status(200).json({

            success: true,
            message: 'Blog added successfully',
            data: newBlog
        })

    } catch (error) {

        console.log("Error occured in add blog : ", error);
        return res.status(500).json({

            success: false,
            message: 'Internal Server Error in add blog'
        })
    }
}

export const getAllBlogs = async (req, res) => {

    try {

        const blogs = await Blog.find({});

        res.status(200).json({

            success: true,
            message: 'Blogs fetched successfully',
            data: blogs
        })

    } catch (error) {

        res.status(500).json({

            success: false,
            message: 'Internal Server Error'
        })
    }

}

export const getBlog = async (req, res) => {

    try {

        const blogId = req.params.blogId;

        if (!blogId) {

            return res.status(400).json({

                success: false,
                message: 'Blog Id is required',
            })
        }

        const blogDetails = await Blog.findById(
            blogId
        )
            .populate('author')
            .populate('category');
            
        


        if (!blogDetails) {

            return res.status(400).json({

                success: false,
                message: 'Blog not found',
            })
        }

        res.status(200).json({

            success: true,
            message: 'Blog Data fetched successfully...',
            data: blogDetails,
        });

    } catch (error) {

        console.log("Internal Server Error ::", error);
        return res.status(500).json({

            success: false,
            message: 'Internal Server Error',
        });
    }
}