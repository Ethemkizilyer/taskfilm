import { Link, useLocation } from "react-router-dom";
import "./movieDetail.css";
import { useEffect, useState } from "react";
import { castList } from "../../reducers/castSlice";
import { FaStar } from 'react-icons/fa';
import defaultImg from "../../utils/defaultImg.jpg";
import { useAppDispatch, useAppSelector } from "../../store";
import { cast } from "../../services/cast";
import { genresList } from "../../reducers/genresSlice";
import { genres } from "../../services/genres";
import axios from "axios";
const MovieDetailViewerPage = (props) => {
  const dispatch = useAppDispatch();
  const castD = useAppSelector(castList);
  const genresD = useAppSelector(genresList);
  let data = useLocation();
  const [trailer, setTrailer] = useState("");
const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(cast(data?.state?.detail?.id));
    dispatch(genres(data?.pathname.includes("movies") ? "movie" : "tv"));
    async function getTrailer() {
      setLoading(true);
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${data?.state?.detail?.id}/videos?api_key=26ba5e77849587dbd7df199727859189`
      );
      setTrailer(
        request?.data?.results.filter(
          (mov) => mov?.name === "Official Trailer" || mov.type === "Trailer"
        )[0]?.key
      );
      setLoading(false);
    }
    data?.pathname.includes("movies") && getTrailer();
  }, []);
  const elements = castD?.cast?.map(({ id, name, profile_path }) => (
    <li key={id} className="cast-item" style={{listStyle:"none"}}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/original${profile_path}`
            : defaultImg
        }
        alt={name}
        width={100}
        height={80}
        className="cast-image"
        style={{ objectFit:"cover"}}
      />
      <p className="cast-name" style={{ color: "white", fontSize: "10px" ,margin:0}}>{name}</p>
    </li>
  ));
  const foundGenres = genresD?.genres?.filter(gen => data?.state?.detail?.genre_ids.includes(gen.id)).map(g => g.name);
const output = foundGenres?.join(", ");
  return (
  
      <div className="banner">
        <img
          alt="bg"
          className="bg"
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original/${data.state.detail.backdrop_path}`}
        />
        <div className="gradient-bg">
          <div className="content">
            <Link className="navdetail" to={-1}>
              {"↩ Go Back"}
            </Link>
            <div className="movieTitle">
              {data.state.detail?.title
                ? data.state.detail?.title
                : data.state.detail?.name
                ? data.state.detail?.name
                : data.state.detail?.original_title}
            </div>
            <div className="movieDesc">
              {/* <p>{data.state.detail?.overview}</p> */}
              <p><strong>Original Title:</strong> {data.state.detail?.original_title}</p>
      <p><strong>Overview:</strong> {data.state.detail?.overview}</p>
      <p><strong>Release Date:</strong>{data.state.detail?.release_date
                ? data.state.detail?.release_date 
                : "-"}</p>
      <p><strong>Genres:</strong>{output}</p>
              <p><strong>Popularity:</strong> {data.state.detail?.popularity}</p>
      <p style={{display:"flex",alignItems:"center",gap:"5px"}}><strong>Vote Average:</strong> {data.state.detail?.vote_average.toFixed(1)} <FaStar style={{color:`${data.state.detail?.vote_average.toFixed(1) < 5 ? "red" : data.state.detail?.vote_average.toFixed(1) <=6 ? "orange" : "yellow"}`}}/></p>
      <p><strong>Vote Count:</strong> {data.state.detail?.vote_count}</p>
            </div>
            { data?.pathname.includes("movies") && <div className="movie-actions">
            
                <a className="play-button" href={`https://www.youtube.com/watch?v=${trailer}`}
                  target="_blank"
                  rel="noreferrer">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="2em"
                  width="2em"
                >
                  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z" />
                </svg>
                PLAY
                </a>
            </div>}
            <div className="scroll-container">
              {castD?.cast?.length > 0 && (
                <ol className="cast-list" style={{ display: "flex", gap: "5px", padding: 0, margin: 0  }}>
                  {elements}
                </ol>
              )}{" "}
            </div>
          </div>
        </div>

        <div></div>
      </div>
    
  );
};

export default MovieDetailViewerPage;
