import React, { useState, useEffect } from "react";
import styles from "../../styles/species.module.scss";
import SpecieCard from "./SpecieCard";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

interface Species {
  name: string;
  classification: string;
  designation: string;
}

const Species = () => {
  // states ------------------------------->
  const [species, setSpecies] = useState<Species[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [speciesPerPage] = useState(3);
  const [isLoaded, setIsLoaded] = useState(true);

  // here we are fetching the data from the api ------------------->
  useEffect(() => {
    setIsLoaded(true);
    const fetchSpecies = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/species/");
        const data = await response.json();
        // Extracting only the required fields from each planet object --------------------->
        const extractedPlanets = data.results.map((species: any) => ({
          name: species.name,
          classification: species.classification,
          designation: species.designation,
        }));

        setSpecies(extractedPlanets);
        setIsLoaded(false);
      } catch (error) {
        console.log("Error fetching planets:🔥", error);
      }
    };

    fetchSpecies();
  }, []);

  // Calculate current planets to display based on pagination ------------------>
  const indexOfLastSpecies = currentPage * speciesPerPage;
  const indexOfFirstSpecies = indexOfLastSpecies - speciesPerPage;
  const currentSpecies = species.slice(indexOfFirstSpecies, indexOfLastSpecies);

  // Go to previous page ----------------------->
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Go to next page ----------------->
  const goToNextPage = () => {
    const totalPages = Math.ceil(species.length / speciesPerPage);
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
        <div className={styles.speciesParent}>
          <div className={styles.cardsParent}>
            {/* ===> vehicles  */}
            {currentSpecies.map((item, index) => {
              return (
                <SpecieCard
                  name={item.name}
                  classification={item.classification}
                  designation={item.designation}
                  key={index}
                />
              );
            })}
          </div>
          {/* Pagination -----------------------> */}
          <Pagination
            numOfCards={species}
            cardsPerPage={speciesPerPage}
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

export default Species;
