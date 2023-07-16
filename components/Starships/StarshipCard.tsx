import React from "react";
import styles from "../../styles/starShips.module.scss";
import Image from "next/image";

interface Props {
  name: string;
  model: string;
  manufacturer: string;
}

const StarshipCard = ({ name, model, manufacturer }: Props) => {
  return (
    <div className={styles.shipCard}>
      <Image src="/assets/ship.png" width={190} height={160} alt="" />
      {/* name */}
      <div className={styles.attributes}>
        <p className={styles.text}>
          <span className={styles.textType}> Ship Name: </span> {name}
        </p>
        {/* climate */}
        <p className={styles.text}>
          <span className={styles.textType}>Model:</span> {model}
        </p>
        {/* population */}
        <p className={styles.text}>
          <span className={styles.textType}>manufacturer:</span> {manufacturer}
        </p>
      </div>
    </div>
  );
};

export default StarshipCard;
