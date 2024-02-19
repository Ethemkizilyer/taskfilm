import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const cast = createAsyncThunk(
    'cast/Cast',
    async (id) => {
        try {
            const config = {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzdhYTgxZDk5ZmQ1YjQ5MjAxOTIyZDYxYWQ1YjJmZCIsInN1YiI6IjYzNjMwYzc2ODI4OWEwMDA3ZThhMjY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSqncjKEh11NVTdFxGCvkvFpl7924FjZVmZyicFE7ow`
                }
            };

            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/credits`, config
            );
            return response.data;
        } catch (err) {
            throw err;
        }
    }
);

