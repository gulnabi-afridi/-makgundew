import React from "react";
import styles from "../../styles/planets.module.scss";
import Image from "next/image";

const PlanetCard = () => {
  return (
    <div className={styles.planetCard}>
      <Image src="/assets/planet.png" width={150} height={150} alt="" />
      {/* name */}
      <p className={styles.name}>Planet Name</p>
      {/* climate */}
      <p className={styles.name}>Climate: arid</p>
      {/* population */}
      <p className={styles.name}>population: 200000</p>
    </div>
  );
};

export default PlanetCard;
