import React from "react";
import styles from "../../styles/species.module.scss";
import SpecieCard from "./SpecieCard";

const Species = () => {
  return (
    <div className={styles.speciesParent}>
      {/* ===> vehicles  */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
        return <SpecieCard key={index} />;
      })}
    </div>
  );
};

export default Species;
