import React, { useState, useEffect } from "react";
import styles from "../../styles/people.module.scss";
import PeopleCard from "./PeopleCard";
import Pagination from "../Pagination/Pagination";

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
  const [peoplesPerPage] = useState(3);
  const [isLoaded, setIsLoaded] = useState(true);

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
        setIsLoaded(false);
      } catch (error) {
        console.log("Error fetching planets:🔥", error);
      }
    };

    fetchPeoples();
  }, []);

  // Calculate current planets to display based on pagination ------------------>
  const indexOfLastPeople = currentPage * peoplesPerPage;
  const indexOfFirstPeople = indexOfLastPeople - peoplesPerPage;
  const currentPeoples = peoples.slice(indexOfFirstPeople, indexOfLastPeople);

  // Go to previous page ----------------------->
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Go to next page ----------------->
  const goToNextPage = () => {
    const totalPages = Math.ceil(peoples.length / peoplesPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={styles.peopleParent}>
      <div className={styles.cardsParent}>
        {/* ===> vehicles  */}
        {currentPeoples.map((item, index) => {
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
      {/* Pagination -----------------------> */}
      <Pagination
        numOfCards={peoples}
        cardsPerPage={peoplesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
      />
    </div>
  );
};

export default Peoples;
