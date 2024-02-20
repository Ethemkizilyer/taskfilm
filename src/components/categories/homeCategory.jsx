import React, { useEffect } from "react";
import { useAppSelector } from "../../store";
import { selectPopularMovies } from "../../reducers/movieSlice";
import { selectPopularTvSeries } from "../../reducers/tvSeriesSlice";
import MovieCard from "../card/movie";
import "./homeCategory.css";
import { Link } from "react-router-dom";

const HomeMoviesCategory = (props) => {
  const { title, category } = props;

  const populerData = useAppSelector(
    category === "movies" ? selectPopularMovies : selectPopularTvSeries
  );

  return (
    <div
      className="home-movies-category"
      id={category === "movies" ? "section-1" : "section-2"}
    >
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="wrapper">
        {populerData.results?.slice(0, 8).map((res, index) => (
          <div className="card" key={index}>
            <Link to={`${category === "movies" ? "movies" : "tvseries"}/${res.id}`} state={{ detail: res }} onClick={()=>window.scrollTo(0, 0)}>
              <MovieCard
                title={res.title ? res.title : res.name}
                vote_average={res.vote_average}
                poster_path={res.poster_path}
                style={{
                  backgroundColor: "rgba(36, 18, 58, 1)",
                  color: "white",
                }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMoviesCategory;
