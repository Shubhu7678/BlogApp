import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({

    blogTitle: {

        type: String,
        required: true,

    },
    blogDescription: {

        type: String,
        required: true,
    },
    city: {

        type: String,
        required: true,
    },
    tags: {

        type: [String],
        required: true,
    },
    author: {

        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    category: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    thumbnail: {

        type: String,
        required: true,
    },
    likes: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ]

}, {
    timestamps: true
}
)

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;