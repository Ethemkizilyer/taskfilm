import React, {useEffect} from "react";
import "./header.css"
import MovieCard from "../card/movie";

import {useAppSelector} from "../../store";
import {selectTopRatedMovies} from "../../reducers/movieSlice";
import {Link} from "react-router-dom";
const HeaderComponent = (props) => {
    const topRatedMovies = useAppSelector(selectTopRatedMovies)

    useEffect(()=>{

    },[topRatedMovies])
    return (
        <div className="header">
            <div class="bg-mix"></div>
            <div className="header-wrapper">
                <div className="left-section">
                    <Link to={`movies/${topRatedMovies[0]?.id}`} state={{detail:topRatedMovies[0]}}>
                        <MovieCard
                            title={topRatedMovies[0]?.title}
                            vote_average={topRatedMovies[0]?.vote_average}
                            poster_path={topRatedMovies[0]?.poster_path}
                        />
                    </Link>
                </div>
                <div className="title-section">
                    <h3>Welcome to the</h3>
                    <h1>World of TV Series & Movies</h1>
                </div>
                <div className="right-section">
                    <Link to={`movies/${topRatedMovies[0]?.id}`} state={{detail:topRatedMovies[1]}}>
                        <MovieCard
                            title={topRatedMovies[1]?.title}
                            vote_average={topRatedMovies[1]?.vote_average}
                            poster_path={topRatedMovies[1]?.poster_path}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent
