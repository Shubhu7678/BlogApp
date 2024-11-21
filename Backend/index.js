import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/auth.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => { 

    res.send("Hello World");
})

app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true
    }
));
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/user', userRoutes);


// Routes

app.get('/', (req, res) => {

    res.send("hello World");
})

connectDB();

app.listen(PORT, () => { 

    console.log(`Server is running on port ${PORT}`);
})


