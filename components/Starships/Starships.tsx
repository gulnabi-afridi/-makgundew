import React, { useState, useEffect } from "react";
import styles from "../../styles/starShips.module.scss";
import StarshipCard from "./StarshipCard";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

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
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

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
        setNextPageUrl(data.next); // Set the URL of the next page
        setTotalPages(Math.ceil(data.count / data.results.length)); // Calculate the total number of pages
        setIsLoaded(false);
      } catch (error) {
        console.log("Error fetching planets:🔥", error);
      }
    };

    fetchShips();
  }, []);

  // Fetch the next page of data ------------------------>
  const fetchNextPage = async (page: number) => {
    try {
      setIsLoaded(true);
      const response = await fetch(
        `https://swapi.dev/api/starships/?page=${page}`
      );
      const data = await response.json();
      const extractedPlanets = data.results.map((ship: any) => ({
        name: ship.name,
        model: ship.model,
        manufacturer: ship.manufacturer,
      }));

      setStarShips(extractedPlanets);
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
          <div className={styles.shipParent}>
            <div className={styles.cardsParent}>
              {/* ===> vehicles  */}
              {starShips.map((item, index) => {
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
          </div>
          <Pagination
            numOfCards={starShips.length}
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

export default Starships;
