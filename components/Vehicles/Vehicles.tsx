import React, { useState, useEffect } from "react";
import styles from "../../styles/vehicles.module.scss";
import VehicleCard from "./VehicleCard";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  // Add other properties you need from the API response
}

const Vehicles = () => {
  // states ------------------------------->
  const [vehicles, setVehicle] = useState<Vehicle[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  // here we are fetching the data from the api ------------------->
  useEffect(() => {
    setIsLoaded(true);
    const fetchVehicle = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/vehicles/");
        const data = await response.json();
        // Extracting only the required fields from each planet object --------------------->
        const extractedPlanets = data.results.map((vehicle: any) => ({
          name: vehicle.name,
          model: vehicle.model,
          manufacturer: vehicle.manufacturer,
        }));

        setVehicle(extractedPlanets);
        setNextPageUrl(data.next); // Set the URL of the next page
        setTotalPages(Math.ceil(data.count / data.results.length)); // Calculate the total number of pages
        setIsLoaded(false);
      } catch (error) {
        console.log("Error fetching planets:🔥", error);
      }
    };

    fetchVehicle();
  }, []);

  // Fetch the next page of data ------------------------>
  const fetchNextPage = async (page: number) => {
    try {
      setIsLoaded(true);
      const response = await fetch(
        `https://swapi.dev/api/vehicles/?page=${page}`
      );
      const data = await response.json();
      const extractedPlanets = data.results.map((vehicle: any) => ({
        name: vehicle.name,
        model: vehicle.model,
        manufacturer: vehicle.manufacturer,
      }));

      setVehicle(extractedPlanets);
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
          <div className={styles.vehicleParent}>
            <div className={styles.cardsParent}>
              {/* ===> vehicles  */}
              {vehicles.map((vehicle, index) => {
                return (
                  <VehicleCard
                    name={vehicle.name}
                    model={vehicle.model}
                    manufacturer={vehicle.manufacturer}
                    key={index}
                  />
                );
              })}
            </div>
          </div>

          {/* Pagination -----------------------> */}
          <Pagination
            numOfCards={vehicles.length}
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

export default Vehicles;
