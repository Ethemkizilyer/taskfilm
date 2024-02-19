import { createSlice } from '@reduxjs/toolkit';
import {
    fetchPopularMovies,
    fetchTopRatedMovies
} from "../services/movies";



const initialState = {
    popularMovies: [],
    topRatedMovies: [],
    status: 'idle',
    error: null,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchPopularMovies.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchPopularMovies.fulfilled, (state, action) => {
            state.status = 'success';
            state.popularMovies = action.payload;
        }).addCase(fetchPopularMovies.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(fetchTopRatedMovies.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
            state.status = 'success';
            state.topRatedMovies = action.payload;
        }).addCase(fetchTopRatedMovies.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export const selectPopularMovies = (state) => state.movies.popularMovies;
export const selectTopRatedMovies = (state) => state.movies.topRatedMovies;
export default moviesSlice.reducer;

