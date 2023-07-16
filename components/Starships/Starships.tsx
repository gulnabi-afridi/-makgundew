import React, { useState, useEffect } from "react";
import styles from "../../styles/starShips.module.scss";
import StarshipCard from "./StarshipCard";
import Pagination from "../Pagination/Pagination";

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  // Add other properties you need from the API response
}

const Starships = () => {
  // states ------------------------------->
  const [starShips, setStarShips] = useState<Starship[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [shipsPerPage] = useState(3);
  const [isLoaded, setIsLoaded] = useState(true);

  // here we are fetching the data from the api ------------------->
  useEffect(() => {
    setIsLoaded(true);
    const fetchShips = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/starships/");
        const data = await response.json();
        // Extracting only the required fields from each planet object --------------------->
        const extractedPlanets = data.results.map((ship: any) => ({
          name: ship.name,
          model: ship.model,
          manufacturer: ship.manufacturer,
        }));

        setStarShips(extractedPlanets);
        setIsLoaded(false);
      } catch (error) {
        console.log("Error fetching planets:🔥", error);
      }
    };

    fetchShips();
  }, []);

  // Calculate current planets to display based on pagination ------------------>
  const indexOfLastShip = currentPage * shipsPerPage;
  const indexOfFirstShip = indexOfLastShip - shipsPerPage;
  const currentPlanets = starShips.slice(indexOfFirstShip, indexOfLastShip);

  // Go to previous page ----------------------->
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Go to next page ----------------->
  const goToNextPage = () => {
    const totalPages = Math.ceil(starShips.length / shipsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={styles.shipParent}>
      <div className={styles.cardsParent}>
        {/* ===> vehicles  */}
        {currentPlanets.map((item, index) => {
          return (
            <StarshipCard
              name={item.name}
              model={item.model}
              manufacturer={item.manufacturer}
              key={index}
            />
          );
        })}
      </div>
      {/* Pagination -----------------------> */}
      <Pagination
        numOfCards={starShips}
        cardsPerPage={shipsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
      />
    </div>
  );
};

export default Starships;
