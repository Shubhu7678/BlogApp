import User from '../models/user.js';
import Profile from '../models/Profile.js';

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

export const updateProfileAbout = async (req, res) => { 

    try { 
        
        const userId = req.user.id;

        const { firstName, lastName, dateOfBirth, gender, about, contact } = req.body;
        
        
        const userExist = await User.findById(userId);

        if(!userExist) {

            return res.status(400).json({

                success: false,
                message: 'User does not exist',
            })
        }   

        const profileExist = await Profile.findById(userExist.additionalDetails);

        if (firstName) { 

            userExist.firstName = firstName;
        }
        if (lastName) { 

            userExist.lastName = lastName;
        }
        if (dateOfBirth) { 

             profileExist.dateOfBirth = dateOfBirth;
        }
        if (gender) {

            profileExist.gender = gender;
        }
        if (about) {
            
            profileExist.about = about;
        }
        if (contact) {

            profileExist.contact = contact;
        }

        await userExist.save();
        await profileExist.save();

        const userUpdatedData = await User.findById(userId).populate('additionalDetails');

        return res.status(200).json({

            success: true,
            message: 'Profile updated successfully',
            data : userUpdatedData,
        });
        

    } catch (error) {
        
        return res.status(500).json({

            success: false,
            message: 'Internal Server Error',
            error: error.message
        })

    }
}