import React, { useState, useEffect } from "react";
import styles from "../../styles/planets.module.scss";
import PlanetCard from "./PlanetCard";
import { HiArrowLeft } from "react-icons/hi";

interface Planet {
  name: string;
  climate: string;
  population: string;
  // Add other properties you need from the API response
}

const Planets = () => {
  // states ------------------------
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [planetsPerPage] = useState(3);

  // here we are fetching the data from the api --------------
  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/planets/");
        const data = await response.json();
        // Extracting only the required fields from each planet object
        const extractedPlanets = data.results.map((planet: any) => ({
          name: planet.name,
          climate: planet.climate,
          population: planet.population,
        }));

        setPlanets(extractedPlanets);
      } catch (error) {
        console.log("Error fetching planets:🔥", error);
      }
    };

    fetchPlanets();
  }, []);

  // Calculate current planets to display based on pagination
  const indexOfLastPlanet = currentPage * planetsPerPage;
  const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage;
  const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Go to previous page
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Go to next page
  const goToNextPage = () => {
    const totalPages = Math.ceil(planets.length / planetsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={styles.planetsParent}>
      <div className={styles.cardsParent}>
        {/* ===> planet card */}
        {currentPlanets.map((item, index) => {
          return (
            <PlanetCard
              key={index}
              name={item.name}
              climate={item.climate}
              population={item.population}
            />
          );
        })}
      </div>
      {/* Pagination */}
      <div className={styles.pagination}>
        <button disabled={currentPage === 1} onClick={goToPrevPage}>
          <HiArrowLeft className={styles.arrowLeft} />
        </button>
        {Array.from({ length: Math.ceil(planets.length / planetsPerPage) }).map(
          (_, index) => (
            <button
              className={`${styles.btn} ${
                currentPage === index + 1 ? styles.activeBtn : ""
              }`}
              key={index}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
        <button
          disabled={currentPage === Math.ceil(planets.length / planetsPerPage)}
          onClick={goToNextPage}
        >
          <HiArrowLeft className={styles.arrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Planets;
