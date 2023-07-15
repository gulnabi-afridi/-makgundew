import React from "react";
import styles from "../../styles/starShips.module.scss";
import StarshipCard from "./StarshipCard";

const Starships = () => {
  return (
    <div className={styles.shipParent}>
      {/* ===> vehicles  */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
        return <StarshipCard key={index} />;
      })}
    </div>
  );
};

export default Starships;
