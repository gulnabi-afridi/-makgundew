import React from "react";
import styles from "../../styles/starShips.module.scss";
import Image from "next/image";

const StarshipCard = () => {
  return (
    <div className={styles.shipCard}>
      <Image src="/assets/ship.png" width={190} height={160} alt="" />
      {/* name */}
      <div className={styles.attributes}>
        <p className={styles.text}>
          <span className={styles.textType}> Ship Name: </span> Name mdc dn
          jdcjdbcjdc
        </p>
        {/* climate */}
        <p className={styles.text}>
          <span className={styles.textType}>Model:</span> Digger Crawler
        </p>
        {/* population */}
        <p className={styles.text}>
          <span className={styles.textType}>manufacturer:</span> Corellia Mining
          Corporation
        </p>
      </div>
    </div>
  );
};

export default StarshipCard;
