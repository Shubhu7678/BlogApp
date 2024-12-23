import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/auth.js';
import blogRoutes from './routes/blogs.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
// import fileUpload from 'express-fileupload';
import { fileURLToPath } from 'url';
import multer from 'multer';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000


app.get('/', (req, res) => { 

    res.send("Hello World");
})

// app.use(cors(
//     {
//         origin: "https://blog-app-roan-phi.vercel.app",
//         credentials: true
//     }
// ));
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true
    }
));
app.use(express.json());
app.use(cookieParser());
// app.use('/uploads', express.static('uploads'));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




// app.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp",
// }));

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes);


// Routes

app.get('/', (req, res) => {

    res.send("hello World");
})

connectDB();

app.listen(PORT, () => { 

    console.log(`Server is running on port ${PORT}`);
})


