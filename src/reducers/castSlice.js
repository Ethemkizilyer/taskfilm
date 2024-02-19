import { createSlice } from '@reduxjs/toolkit';
import {

    cast
} from "../services/cast";


const initialState = {
    cast: {},
    status: 'idle',
    error: null,
};

const castD = createSlice({
    name: 'cast',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(cast.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(cast.fulfilled, (state, action) => {
            state.status = 'success';
            state.cast = action.payload;
        }).addCase(cast.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export const castList = (state) => state.cast.cast;
export default castD.reducer;

