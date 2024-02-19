import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchPopularMovies = createAsyncThunk(
    'movies/fetchPopularMovies',
    async () => {
        try {
            const config = {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzdhYTgxZDk5ZmQ1YjQ5MjAxOTIyZDYxYWQ1YjJmZCIsInN1YiI6IjYzNjMwYzc2ODI4OWEwMDA3ZThhMjY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSqncjKEh11NVTdFxGCvkvFpl7924FjZVmZyicFE7ow`
                }
            };

            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, config
            );
            return response.data;
        } catch (err) {
            throw err;
        }
    }
);

export const fetchTopRatedMovies = createAsyncThunk(
    'movies/fetchTopRatedMovies',
    async () => {
        try {
            const config = {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzdhYTgxZDk5ZmQ1YjQ5MjAxOTIyZDYxYWQ1YjJmZCIsInN1YiI6IjYzNjMwYzc2ODI4OWEwMDA3ZThhMjY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vSqncjKEh11NVTdFxGCvkvFpl7924FjZVmZyicFE7ow`
                }
            };

            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, config
            );

            const randomMovies = [];
            const totalMovies = response.data.results.length;
            for (let i = 0; i < 2; i++) {
                const randomIndex = Math.floor(Math.random() * totalMovies);
                randomMovies.push(response.data.results[randomIndex]);
            }
            return randomMovies;

        } catch (err) {
            throw err;
        }
    }
);
