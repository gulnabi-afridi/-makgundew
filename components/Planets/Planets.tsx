import React, { useState, useEffect } from "react";
import styles from "../../styles/planets.module.scss";
import PlanetCard from "./PlanetCard";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

interface Planet {
  name: string;
  climate: string;
  population: string;
  // Add other properties you need from the API response
}

const Planets = () => {
  // states ------------------------------->
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [planetsPerPage] = useState(3);
  const [isLoaded, setIsLoaded] = useState(true);

  // here we are fetching the data from the api ------------------->
  useEffect(() => {
    setIsLoaded(true);
    const fetchPlanets = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/planets/");
        const data = await response.json();
        // Extracting only the required fields from each planet object --------------------->
        const extractedPlanets = data.results.map((planet: any) => ({
          name: planet.name,
          climate: planet.climate,
          population: planet.population,
        }));

        setPlanets(extractedPlanets);
        setIsLoaded(false);
      } catch (error) {
        console.log("Error fetching planets:🔥", error);
      }
    };

    fetchPlanets();
  }, []);

  // Calculate current planets to display based on pagination ------------------>
  const indexOfLastPlanet = currentPage * planetsPerPage;
  const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage;
  const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet);

  // Go to previous page ----------------------->
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Go to next page ----------------->
  const goToNextPage = () => {
    const totalPages = Math.ceil(planets.length / planetsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      {isLoaded ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <div className={styles.planetsParent}>
          <div className={styles.cardsParent}>
            {/*  planet card ---------------------> */}
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
          {/* Pagination -----------------------> */}
          <Pagination
            numOfCards={planets}
            cardsPerPage={planetsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            goToPrevPage={goToPrevPage}
            goToNextPage={goToNextPage}
          />
        </div>
      )}
    </>
  );
};

export default Planets;
