import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signup = async(req, res) => {

    try {

        const { firstName, lastName, email, password, confirmPassword } = req.body;
        
        if (!firstName || !lastName || !email || !password || !confirmPassword) { 

            return res.status(400).json({

                success: false,
                message: "All fields are required"
            });
        }

        if (password !== confirmPassword) { 

            return res.status(400).json({

                success: false,
                message: "Passwords do not match"
            })
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) { 

            return res.status(400).json({

                success: false,
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userImage = `https://ui-avatars.com/api/?name=${firstName}+${lastName}`;

        const user = await User.create(
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashedPassword,
                userImage : userImage,
            }
        )

        if (!user) { 

            return res.status(400).json({

                success: false,
                message: "User not created"
            });
        }

        return res.status(200).json({

            success: true,
            message: "User created successfully"
        })

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });

    }
}

export const login = async (req, res) => { 

    try {

        const { email, password } = req.body;
        
        if (!email || !password) { 

            return res.status(400).json({

                success: false,
                message: "All fields are required"
            })
        }

        const userExist = await User.findOne({ email });

        if (!userExist) { 

            return res.status(400).json({

                success: false,
                message : "User does not exist",
            })
        }

        const isMatch = await bcrypt.compare(password, userExist.password);

        if (!isMatch) { 

            return res.status(400).json({

                success: false,
                message : "Invalid credentials",
            })
        }

        const payload = {

            id: userExist._id,
            email: userExist.email,
            firstName: userExist.firstName,
            lastName : userExist.lastName,
            userImage : userExist.userImage,
        }

        // console.log("JWT_SECRET:", process.env.JWT_SECRET);

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' });
        
        const option = {

            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        }

        res.cookie('token', token, option).status(200).json({

            success: true,
            message: "User logged in successfully",
            data : payload,
            token
        })
        

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: 'Internal Server Error',
            error: error.message,
        })
    }
}

export const logout = async (req, res) => { 

    try {
          
        res.cookie('token', '', { expires: new Date(Date.now()), httpOnly: true });
       return  res.status(200).json({

            success: true,
            message: "User logged out successfully"
        })


    } catch (error) { 

        console.log("Error occured : ", error);
        return res.status(500).json({

            success: false,
            message: 'Internal Server Error',
            error: error.message,
        })
    }
}