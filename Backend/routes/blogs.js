import express from 'express';
// import upload from '../index.js';
import upload from '../middlewares/multer.js';
const router = express.Router();

import { addCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from '../controllers/category.js';
import { addBlog,getAllBlogs } from '../controllers/Blog.js';
import { auth } from '../middlewares/auth.js';

// ==========================CATEGORY=========================================================

router.post('/add-category', auth, addCategory);
router.get('/getAllCategories',auth, getAllCategories);
router.get('/getCategory/:categoryId', auth, getCategoryById);
router.post('/updateCategory', auth, updateCategory)
router.post('/deleteCategory', deleteCategory)

// ==================================BLOG=======================================================

router.post('/add-blog', auth, upload.single('thumbnail'), addBlog);
router.get('/getAllBlogs',auth, getAllBlogs);


export default router;