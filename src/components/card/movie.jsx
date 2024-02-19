import "./movie.css"
const MovieCard = (props) => {
    const { style = {} } = props;

    return(
        <div className="movie-card">
            <img alt={""}  loading="lazy" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}/>
            <div className="rating-box" style={{backgroundColor: style.backgroundColor || 'white'}}>
                <h1 className="rating" style={{color: style.color || "black"}}>
                    {props.vote_average?.toString().slice(0, 3)} / 10
                </h1>
            </div>
            <div className="info-box">
                <div className="info">
                    {props.title}
                </div>
            </div>
        </div>
    )
}

export default MovieCard
