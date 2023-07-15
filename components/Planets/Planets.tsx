import React from "react";
import styles from "../../styles/planets.module.scss";
import PlanetCard from "./PlanetCard";

const Planets = () => {
  return (
    <div className={styles.planetsParent}>
      {/* ===> planet card */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
        return <PlanetCard key={index} />;
      })}
    </div>
  );
};

export default Planets;
