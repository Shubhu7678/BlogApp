import User from '../models/user.js';

export const updateProfileImage = async (req, res) => {

    try {

        const userId = req.user.id;
        const profileImage = req.file ? req.file.path : null;
        // console.log("Profile Image ::", profileImage);

        if (!profileImage) {

            return res.status(400).json({

                success: false,
                message: 'Please upload an image',
            })
        }

        const urlProfileImage = 'http://localhost:4000/' + profileImage;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                userImage: urlProfileImage,
            },
            {
                new: true,
            }
        )

        if (!updatedUser) {

            return res.status(400).json({

                success: false,
                message: 'Profile image not updated',
            })
        }

        return res.status(200).json({

            success: true,
            message: 'Profile image updated successfully',
            data: updatedUser,
        })

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: 'Internal Server Error',
            error: error.message,
        })
    }
}