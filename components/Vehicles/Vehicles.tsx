import React, { useState, useEffect } from "react";
import styles from "../../styles/vehicles.module.scss";
import VehicleCard from "./VehicleCard";
import Pagination from "../Pagination/Pagination";

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
  const [vehiclePerPage] = useState(3);
  const [isLoaded, setIsLoaded] = useState(true);

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
        setIsLoaded(false);
      } catch (error) {
        console.log("Error fetching planets:🔥", error);
      }
    };

    fetchVehicle();
  }, []);

  // Calculate current planets to display based on pagination ------------------>
  const indexOfLastVehicle = currentPage * vehiclePerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclePerPage;
  const currentVehicles = vehicles.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  );

  // Go to previous page ----------------------->
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Go to next page ----------------->
  const goToNextPage = () => {
    const totalPages = Math.ceil(vehicles.length / vehiclePerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={styles.vehicleParent}>
      <div className={styles.cardsParent}>
        {/* ===> vehicles  */}
        {currentVehicles.map((vehicle, index) => {
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
      {/* Pagination -----------------------> */}
      <Pagination
        numOfCards={vehicles}
        cardsPerPage={vehiclePerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
      />
    </div>
  );
};

export default Vehicles;
