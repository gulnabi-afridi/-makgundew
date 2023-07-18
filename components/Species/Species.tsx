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
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);
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
        setNextPageUrl(data.next); // Set the URL of the next page
        setTotalPages(Math.ceil(data.count / data.results.length)); // Calculate the total number of pages
        setIsLoaded(false);
      } catch (error) {
        console.log("Error fetching planets:🔥", error);
      }
    };

    fetchSpecies();
  }, []);

  // Fetch the next page of data ------------------------>
  const fetchNextPage = async (page: number) => {
    try {
      setIsLoaded(true);
      const response = await fetch(
        `https://swapi.dev/api/people/?species=${page}`
      );
      const data = await response.json();
      const extractedPlanets = data.results.map((species: any) => ({
        name: species.name,
        classification: species.classification,
        designation: species.designation,
      }));

      setSpecies(extractedPlanets);
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
          <div className={styles.speciesParent}>
            <div className={styles.cardsParent}>
              {/* ===> vehicles  */}
              {species.map((item, index) => {
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
          </div>
          <Pagination
            numOfCards={species.length}
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

export default Species;
