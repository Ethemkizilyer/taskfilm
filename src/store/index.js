import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import moviesSlice from "../reducers/movieSlice";
import tvSeriesSlice from "../reducers/tvSeriesSlice";
import castD from "../reducers/castSlice";
import genresD from "../reducers/genresSlice";

const store = configureStore({
    reducer: {
        movies: moviesSlice,
        tvSeries: tvSeriesSlice,
        cast: castD,
        genres: genresD
    }
});


export default store;
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
