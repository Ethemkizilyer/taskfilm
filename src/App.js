import React, { useEffect } from 'react';
import './App.css';
import Navbar from './layouts/navbar/navbar';
import HeaderComponent from "./components/header/header";
import {useAppDispatch} from "./store";
import {fetchPopularMovies, fetchTopRatedMovies} from "./services/movies";
import HomeMoviesCategory from "./components/categories/homeCategory";
import {fetchPopularTvSeries, fetchTopRatedTvSeries} from "./services/tvSeries";


function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPopularMovies())
        dispatch(fetchTopRatedMovies())
        dispatch(fetchPopularTvSeries())
        dispatch(fetchTopRatedTvSeries())
    }, [dispatch]);

  return (
      <div id='home'>
          <Navbar />
          <HeaderComponent/>
          <HomeMoviesCategory
              title="Populer Movies"
              category="movies"
          />
          <HomeMoviesCategory
              title="Populer Tv Series"
              category="moviess"
          />
      </div>
  );
}

export default App;
