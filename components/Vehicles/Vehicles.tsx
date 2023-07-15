import React from "react";
import styles from "../../styles/vehicles.module.scss";
import VehicleCard from "./VehicleCard";

const Vehicles = () => {
  return (
    <div className={styles.vehicleParent}>
      {/* ===> vehicles  */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
        return <VehicleCard key={index} />;
      })}
    </div>
  );
};

export default Vehicles;
