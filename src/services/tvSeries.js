import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchPopularTvSeries = createAsyncThunk(
    'movies/fetchPopularTvSeries',
    async () => {
        try {
            const config = {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzdhYTgxZDk5ZmQ1YjQ5MjAxOTIyZDYxYWQ1YjJmZCIsInN1YiI6IjYzNjMwYzc2ODI4OWEwMDA3ZThhMjY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSqncjKEh11NVTdFxGCvkvFpl7924FjZVmZyicFE7ow`
                }
            };

            const response = await axios.get(
                `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`, config
            );
            return response.data;
        } catch (err) {
            throw err;
        }
    }
);

export const fetchTopRatedTvSeries = createAsyncThunk(
    'movies/fetchTopRatedTvSeries',
    async () => {
        try {
            const config = {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzdhYTgxZDk5ZmQ1YjQ5MjAxOTIyZDYxYWQ1YjJmZCIsInN1YiI6IjYzNjMwYzc2ODI4OWEwMDA3ZThhMjY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSqncjKEh11NVTdFxGCvkvFpl7924FjZVmZyicFE7ow`
                }
            };

            const response = await axios.get(
                `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`, config
            );

            const randomTvSeries = [];
            const totalTvSeries = response.data.results.length;
            for (let i = 0; i < 2; i++) {
                const randomIndex = Math.floor(Math.random() * totalTvSeries);
                randomTvSeries.push(response.data.results[randomIndex]);
            }
            return randomTvSeries;

        } catch (err) {
            throw err;
        }
    }
);
