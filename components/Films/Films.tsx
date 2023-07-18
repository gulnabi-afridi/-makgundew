import React, { useState, useEffect } from "react";
import styles from "../../styles/films.module.scss";
import FilmCard from "./FilmCard";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

interface Film {
  name: string;
  director: string;
  producer: string;
}

const Films = () => {
  // states ------------------------------->
  const [films, setFilms] = useState<Film[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);

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
        setNextPageUrl(data.next); // Set the URL of the next page
        setTotalPages(Math.ceil(data.count / data.results.length)); // Calculate the total number of pages
        setIsLoaded(false);
      } catch (error) {
        console.log("Error fetching planets:🔥", error);
      }
    };

    fetchFilms();
  }, []);

  // Fetch the next page of data ------------------------>
  const fetchNextPage = async (page: number) => {
    try {
      setIsLoaded(true);
      const response = await fetch(`https://swapi.dev/api/films/?page=${page}`);
      const data = await response.json();
      const extractedPlanets = data.results.map((film: any) => ({
        name: film.title,
        director: film.director,
        producer: film.producer,
      }));

      setFilms(extractedPlanets);
      setNextPageUrl(data.next); // Set the URL of the next page
      setIsLoaded(false);
    } catch (error) {
      console.log("Error fetching planets:🔥", error);
    }
  };

  return (
    <>
      {isLoaded ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <div className={styles.parent}>
          <div className={styles.filmParent}>
            <div className={styles.cardsParent}>
              {/* ===> vehicles  */}
              {films.map((item, index) => {
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
          </div>
          {/* Pagination -----------------------> */}
          <Pagination
            numOfCards={films.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            fetchNextPage={fetchNextPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </>
  );
};

export default Films;
