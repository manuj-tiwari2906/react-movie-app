import React from "react";

const IMAGE_API = "https://image.tmdb.org/t/p/w500";

const setVoteClass = (vote) => {
  if(vote >= 8)
  {
    return 'green';
  }else if(vote >=6) {
   return 'orange'
  } else {
    return 'red'
  }
}

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <img
        src={IMAGE_API + poster_path}
        alt={title}
        
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className = {`tag ${setVoteClass(vote_average)}` } >{vote_average}</span>
      </div>

      <div className="movie-overview">
      <h4>Overview</h4>
      <p>{overview}</p>
      </div>

      

      {/* <div className="card">
        <div className="image">
          <img className="img-fluid" src={IMAGE_API + poster_path} alt={title} />
        </div>

        <div className="movie-info text-center">
          <h3>{title}</h3>
          <span>{vote_average}</span>
        </div>
        <div className="movie-over text-center">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Movie;
