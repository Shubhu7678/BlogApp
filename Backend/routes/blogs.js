import express from 'express';
// import upload from '../index.js';
import upload from '../middlewares/multer.js';
const router = express.Router();

import { addCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from '../controllers/category.js';
import { addBlog, getAllBlogs, getBlog, updateBlog, deleteBlog } from '../controllers/Blog.js';
import { updateProfileImage } from '../controllers/profile.js';
import { auth } from '../middlewares/auth.js';

// ==========================CATEGORY=========================================================

router.post('/add-category', auth, addCategory);
router.get('/getAllCategories',auth, getAllCategories);
router.get('/getCategory/:categoryId', auth, getCategoryById);
router.post('/updateCategory', auth, updateCategory)
router.post('/deleteCategory', deleteCategory)

// ==================================BLOG=======================================================

router.post('/add-blog', auth, upload.single('thumbnail'), addBlog);
router.get('/getAllBlogs', auth, getAllBlogs);
router.get('/getBlog/:blogId', auth, getBlog);
router.post('/updateBlog', auth, upload.single('thumbnail'), updateBlog);
router.delete('/deleteBlog/:blogId', auth, deleteBlog);

// ==================================PROFILE=======================================================

router.post('/updateProfileImage',auth,upload.single('userImage'),updateProfileImage);


export default router;