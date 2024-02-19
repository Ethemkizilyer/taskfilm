import { createSlice } from '@reduxjs/toolkit';
import {
    genres
} from "../services/genres";

const initialState = {
    genres: [],
    status: 'idle',
    error: null,
};

const genresD = createSlice({
    name: 'cast',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(genres.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(genres.fulfilled, (state, action) => {
            state.status = 'success';
            state.genres = action.payload;
        }).addCase(genres.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export const genresList = (state) => state.genres.genres;
export default genresD.reducer;

