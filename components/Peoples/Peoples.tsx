import React, { useState, useEffect } from "react";
import styles from "../../styles/people.module.scss";
import PeopleCard from "./PeopleCard";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

interface People {
  name: string;
  height: string;
  mass: string;
  gender: string;
}

const Peoples = () => {
  // states ------------------------------->
  const [peoples, setPeoples] = useState<People[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  // here we are fetching the data from the api ------------------->
  useEffect(() => {
    setIsLoaded(true);
    const fetchPeoples = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        // Extracting only the required fields from each planet object --------------------->
        const extractedPlanets = data.results.map((people: any) => ({
          name: people.name,
          height: people.height,
          mass: people.mass,
          gender: people.gender,
        }));

        setPeoples(extractedPlanets);
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
      const extractedPlanets = data.results.map((people: any) => ({
        name: people.name,
        height: people.height,
        mass: people.mass,
        gender: people.gender,
      }));

      setPeoples(extractedPlanets);
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
          <div className={styles.peopleParent}>
            <div className={styles.cardsParent}>
              {/* ===> vehicles  */}
              {peoples.map((item, index) => {
                return (
                  <PeopleCard
                    name={item.name}
                    mass={item.mass}
                    height={item.height}
                    gender={item.gender}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          {/* Pagination -----------------------> */}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numOfCards={peoples.length}
            fetchNextPage={fetchNextPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </>
  );
};

export default Peoples;
