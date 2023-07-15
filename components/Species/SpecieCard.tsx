import React from "react";
import styles from "../../styles/species.module.scss";
import Image from "next/image";

const SpecieCard = () => {
  return (
    <div className={styles.specieCard}>
      <Image
        src="/assets/species.jpg"
        width={210}
        height={190}
        alt=""
        style={{ borderRadius: "6px" }}
      />
      {/* name */}
      <p className={styles.text}>
        <span className={styles.textType}> classification: </span> mammal
      </p>
      {/* climate */}
      <p className={styles.text}>
        <span className={styles.textType}>Model:</span> Digger Crawler
      </p>
      {/* population */}
      <p className={styles.text}>
        <span className={styles.textType}>designation:</span> sentient
        Corporation
      </p>
    </div>
  );
};

export default SpecieCard;
