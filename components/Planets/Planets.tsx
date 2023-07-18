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
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  // here we are fetching the data from the api ------------------->
  useEffect(() => {
    setIsLoaded(true);
    const fetchPeoples = async () => {
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
        setNextPageUrl(data.next); // Set the URL of the next page
        setTotalPages(Math.ceil(data.count / data.results.length)); // Calculate the total number of pages
        setIsLoaded(false);
      } catch (error) {
        console.log("Error fetching planets:🔥", error);
      }
    };

    fetchPeoples();
  }, []);

  // Fetch the next page of data ------------------------>
  const fetchNextPage = async (page: number) => {
    try {
      setIsLoaded(true);
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${page}`
      );
      const data = await response.json();
      const extractedPlanets = data.results.map((planet: any) => ({
        name: planet.name,
        climate: planet.climate,
        population: planet.population,
      }));

      setPlanets(extractedPlanets);
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
          <div className={styles.planetsParent}>
            <div className={styles.cardsParent}>
              {/*  planet card ---------------------> */}
              {planets.map((item, index) => {
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
          </div>
          {/* Pagination -----------------------> */}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            numOfCards={planets.length}
            fetchNextPage={fetchNextPage}
          />
        </div>
      )}
    </>
  );
};

export default Planets;
