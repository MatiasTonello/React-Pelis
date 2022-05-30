import React from "react";
import movies from "./movies.json";
import MovieCardMoreInfo from "./MovieCardMoreInfo";
import styles from "./MoviesGrid.module.css";

const AboutPeli = () => {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCardMoreInfo key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default AboutPeli;
