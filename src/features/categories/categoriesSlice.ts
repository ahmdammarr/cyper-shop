import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import axios from "axios";
import { CategoriesState } from "./types";

const initialState: CategoriesState = {
    categories: [],
    status: "loading",
};

export const getCategories = createAsyncThunk(
    "category/category",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products/categories");
            return response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: {
        [getCategories.pending.toString()]: (state) => {
            state.status = "loading";
        },
        [getCategories.fulfilled.toString()]: (state, action) => {
            state.status = "done";

            state.categories = action.payload;
        },
        [getCategories.rejected.toString()]: (state, action) => {
            state.status = "failed";

            state.categories = action.payload;
        }
    },
});

export const selectCategories = (state: RootState) => state.categories.categories;
export const selectStatus = (state: RootState) => state.categories.status;

export default categoriesSlice.reducer;
