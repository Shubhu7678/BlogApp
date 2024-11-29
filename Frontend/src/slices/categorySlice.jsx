import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    categories: [],
    loading: false,
    editCategory: false,
    category : [],
    
}

const categorySlice = createSlice({

    name: 'category',
    initialState: initialState,
    reducers: {

        setCategories: (state, action) => {

            state.categories = action.payload;
        },
        setEditCategory: (state, action) => {

            state.editCategory = action.payload;
        },

        setLoading: (state, action) => {

            state.loading = action.payload;
        },

        setCategory: (state, action) => { 

            state.category = action.payload;
        }

    }
})

export const { setCategories, setEditCategory, setLoading, setCategory } = categorySlice.actions;

export default categorySlice.reducer;