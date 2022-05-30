import React from "react";
import styles from "./MovieCard.module.css";

const MovieCardMoreInfo = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={imageUrl}
        alt={movie.title}
      />
      <div>{movie.title}</div>
      <div>Popularity: {movie.popularity}</div>
      <div>Release Date: {movie.release_date}</div>
      <div>Vote Average : {movie.vote_average}</div>
    </li>
  );
};

export default MovieCardMoreInfo;
