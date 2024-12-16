import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    totalBlogs: [],
    blog: [],
    editBlog: false,
    loading: false,

}

const blogSlice = createSlice({

    name: 'blog',
    initialState: initialState,
    reducers: {

        setTotalBlogs: (state, action) => {

            state.totalBlogs = action.payload;
        },
        setBlog: (state, action) => {

            state.blog = action.payload;
        },
        setEditBlog: (state, action) => {

            state.editBlog = action.payload;
        },
        setLoading: (state, action) => {

            state.loading = action.payload;
        }
    }
});

export const { setTotalBlogs, setBlog, setEditBlog, setLoading } = blogSlice.actions;

export default blogSlice.reducer;