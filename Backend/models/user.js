import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    firstName: {

        type: String,
        required: true,
    },
    lastName: {

        type: String,
        required : true,
    },
    email: {

        type: String,
        unique: true,
        lowercase: true,
        required : true,
    },
    password: {

        type : String,
        required : true
    },
    userImage: {

        type: String,
        required : true
    },
    phone: {

        type: String,
    },
    about: {
        type : String,
    },
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog',
        }
    ],

},
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema);

export default User;