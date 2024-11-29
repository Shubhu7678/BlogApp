import express from 'express';
const router = express.Router();

import { addCategory,getAllCategories, getCategoryById } from '../controllers/category.js';
import { auth } from '../middlewares/auth.js';

router.post('/add-category', auth, addCategory);
router.get('/getAllCategories',auth, getAllCategories);
router.get('/getCategory/:categoryId', auth, getCategoryById);

export default router;