import React from "react";
import styles from "../../styles/planets.module.scss";
import Image from "next/image";

const PlanetCard = () => {
  return (
    <div className={styles.planetCard}>
      <Image src="/assets/planet.png" width={150} height={150} alt="" />
      <div className={styles.attributes}>
        {/* name */}
        <p className={styles.text}>
          <span className={styles.textType}>Name:</span> Earth
        </p>
        {/* climate */}
        <p className={styles.text}>
          <span className={styles.textType}>Climate:</span> arid
        </p>
        {/* population */}
        <p className={styles.text}>
          <span className={styles.textType}>population:</span> 200000
        </p>
      </div>
    </div>
  );
};

export default PlanetCard;
