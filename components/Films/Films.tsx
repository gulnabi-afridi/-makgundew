import React, { useState, useEffect } from "react";
import styles from "../../styles/films.module.scss";
import FilmCard from "./FilmCard";
import Pagination from "../Pagination/Pagination";

interface Film {
  name: string;
  director: string;
  producer: string;
}

const Films = () => {
  // states ------------------------------->
  const [films, setFilms] = useState<Film[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(3);
  const [isLoaded, setIsLoaded] = useState(true);

  // here we are fetching the data from the api ------------------->
  useEffect(() => {
    setIsLoaded(true);
    const fetchFilms = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        // Extracting only the required fields from each planet object --------------------->
        const extractedPlanets = data.results.map((film: any) => ({
          name: film.title,
          director: film.director,
          producer: film.producer,
        }));

        setFilms(extractedPlanets);
        setIsLoaded(false);
      } catch (error) {
        console.log("Error fetching planets:🔥", error);
      }
    };

    fetchFilms();
  }, []);

  // Calculate current planets to display based on pagination ------------------>
  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

  // Go to previous page ----------------------->
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Go to next page ----------------->
  const goToNextPage = () => {
    const totalPages = Math.ceil(films.length / filmsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={styles.filmParent}>
      <div className={styles.cardsParent}>
        {/* ===> vehicles  */}
        {currentFilms.map((item, index) => {
          return (
            <FilmCard
              name={item.name}
              producer={item.producer}
              director={item.director}
              key={index}
            />
          );
        })}
      </div>
      {/* Pagination -----------------------> */}
      <Pagination
        numOfCards={films}
        cardsPerPage={filmsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
      />
    </div>
  );
};

export default Films;
