import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const auth = (req, res, next) => {

    try {
        const token = req.header("Authorization").replace("Bearer ", "");

        if (!token) {

            return res.status(401).json({

                success: false,
                message: 'Access denied. No token provided'
            });
        }

        // verifying token
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        req.user = payload;
        next();

    } catch (error) {

        return res.status(401).json({

            success: false,
            message: 'Access denied. Invalid token'
        })
    }
}