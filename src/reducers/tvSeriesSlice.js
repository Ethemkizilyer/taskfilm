import { createSlice } from '@reduxjs/toolkit';
import {
    fetchPopularTvSeries,
    fetchTopRatedTvSeries
} from "../services/tvSeries";


const initialState = {
    popularTvSeries: [],
    topRatedTvSeries: [],
    status: 'idle',
    error: null,
};

const tvSeriesSlice = createSlice({
    name: 'tvSeries',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchPopularTvSeries.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchPopularTvSeries.fulfilled, (state, action) => {
            state.status = 'success';
            state.popularTvSeries = action.payload;
        }).addCase(fetchPopularTvSeries.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }).addCase(fetchTopRatedTvSeries.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchTopRatedTvSeries.fulfilled, (state, action) => {
            state.status = 'success';
            state.topRatedTvSeries = action.payload;
        }).addCase(fetchTopRatedTvSeries.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export const selectPopularTvSeries = (state) => state.tvSeries.popularTvSeries;
export const selectTopRatedTvSeries = (state) => state.tvSeries.topRatedTvSeries;
export default tvSeriesSlice.reducer;

