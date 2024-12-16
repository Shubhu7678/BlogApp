import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import categoryReducer from './slices/categorySlice';
import blogReducer from './slices/blogSlice';

export const store = configureStore({

    reducer: {
        auth: authReducer,
        profile: profileReducer,
        category: categoryReducer,
        blog : blogReducer,
    },
})
