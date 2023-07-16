import React from "react";
import styles from "../../styles/planets.module.scss";
import Image from "next/image";

interface Props {
  name: string;
  climate: string;
  population: string;
}

const PlanetCard = ({ name, climate, population }: Props) => {
  return (
    <div className={styles.planetCard}>
      <Image src="/assets/planet.png" width={150} height={150} alt="" />
      <div className={styles.attributes}>
        {/* name */}
        <p className={styles.text}>
          <span className={styles.textType}>Name:</span> {name}
        </p>
        {/* climate */}
        <p className={styles.text}>
          <span className={styles.textType}>Climate:</span> {climate}
        </p>
        {/* population */}
        <p className={styles.text}>
          <span className={styles.textType}>population:</span> {population}
        </p>
      </div>
    </div>
  );
};

export default PlanetCard;
