// import { apiConnector } from "./apiconnector";
const BASE_URL = import.meta.env.VITE_BASE_URL; 
// const BASE_URL = 'https://blog-app-api-mu-rosy.vercel.app'

export const authEndPoints = {

    SIGNUP_API: BASE_URL + '/api/v1/user/signup',
    LOGIN_API: BASE_URL + '/api/v1/user/login',
    LOGOUT_API : BASE_URL + '/api/v1/user/logout',
}

export const categoryEndPoints = {

    CREATE_CATEGORY_API: BASE_URL + '/api/v1/blog/add-category',
    GET_ALL_CATEGORIES_API: BASE_URL + '/api/v1/blog/getAllCategories',
    GET_CATEGORY_BY_ID_API: BASE_URL + '/api/v1/blog/getCategory',
    UPDATE_CATEGORY_API: BASE_URL + '/api/v1/blog/updateCategory',
    DELETE_CATEGORY_API: BASE_URL + '/api/v1/blog/deleteCategory',

}

export const blogEndPoints = {

    CREATE_BLOG_API: BASE_URL + '/api/v1/blog/add-blog',
    GET_ALL_BLOGS_API: BASE_URL + '/api/v1/blog/getAllBlogs',
    GET_BLOG_BY_ID_API: BASE_URL + '/api/v1/blog/getBlog',
    UPDATE_BLOG_API: BASE_URL + '/api/v1/blog/updateBlog',
    DELETE_BLOG_API: BASE_URL + '/api/v1/blog/deleteBlog',
    GET_ALL_BLOGS_FOR_HOME_PAGE: BASE_URL + '/api/v1/blog/getAllBlogsForHomePage',
}

export const profileEndPoints = {

    UPDATE_PROFILE_IMAGE_API: BASE_URL + '/api/v1/blog/updateProfileImage',
    UPDATE_PROFILE_ABOUT_API: BASE_URL + '/api/v1/blog/updateProfileAbout',
}

